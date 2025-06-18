using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using System.Net.Http.Headers;
using Newtonsoft.Json;
using PoliticoAI.Common.JsonModels;
using PoliticoAI.DAL;
using PoliticoAI.DAL.Entities;
using System.Text;

namespace PoliticoAI.WebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize]
    public class PoliticalBSTranslatorController : ControllerBase
    {
        private readonly FuguContext _context;
        private readonly PoliticoAISettings _fuguSettings;
        private readonly IHttpClientFactory _clientFactory;

        public PoliticalBSTranslatorController(
            FuguContext dbContext,
            IOptions<PoliticoAISettings> fuguSettings,
            IHttpClientFactory clientFactory)
        {
            _context = dbContext;
            _fuguSettings = fuguSettings.Value;
            _clientFactory = clientFactory;
        }

        [HttpPost("analyze-text")]
        public async Task<IActionResult> AnalyzeTextAsync([FromBody] AnalyzeRequest request)
        {
            if (string.IsNullOrWhiteSpace(request?.Text))
            {
                return BadRequest("Text is required.");
            }

            var payload = new { text = request?.Text };
            var json = JsonConvert.SerializeObject(payload);
            var content = new StringContent(json, Encoding.UTF8, "application/json");

            var client = _clientFactory.CreateClient();
            var pythonUrl = "http://localhost:8000/analyze-text"; // Python FastAPI endpoint



            var response = await client.PostAsync(pythonUrl, content);

            if (!response.IsSuccessStatusCode)
            {
                return StatusCode((int)response.StatusCode, "Error calling NLP service");
            }

            var result = await response.Content.ReadAsStringAsync();
            var parsed = JsonConvert.DeserializeObject<AnalyzeReponseJsonModel>(result);

            return Ok(parsed);
        }

        [HttpPost("upload")]
        public async Task<IActionResult> Upload(IFormFile file)
        {
            if (file == null || file.Length == 0)
                return BadRequest("No file uploaded.");

            // Save temporarily
            var filePath = Path.Combine(Path.GetTempPath(), file.FileName);
            using (var stream = new FileStream(filePath, FileMode.Create))
            {
                await file.CopyToAsync(stream);
            }

            // Prepare multipart content to send to Python
            var client = _clientFactory.CreateClient();
            using var form = new MultipartFormDataContent();
            using var fileContent = new StreamContent(System.IO.File.OpenRead(filePath));
            fileContent.Headers.ContentType = new MediaTypeHeaderValue("application/octet-stream");
            form.Add(fileContent, "file", file.FileName);

            var response = await client.PostAsync("http://localhost:8000/transcribe", form);

            if (!response.IsSuccessStatusCode)
                return StatusCode((int)response.StatusCode, "Transcription failed");

            var transcript = await response.Content.ReadAsStringAsync();
            return Ok(transcript);
        }

    }
}
