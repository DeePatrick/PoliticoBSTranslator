using PoliticoAI.WebApi;
using PoliticoAI.Common.JsonModels;
using PoliticoAI.DAL;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using Newtonsoft.Json;
using System.DirectoryServices.AccountManagement;
using System.Security.Principal;

namespace PoliticoAI.WebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize]
    public class MainController(FuguContext dbContext, IOptions<PoliticoAISettings> fuguSettings) : ControllerBase
    {
        private readonly FuguContext _context = dbContext;
        private readonly PoliticoAISettings _fuguSettings = fuguSettings.Value;

        [HttpGet("[action]")]
        public CurrentUserJsonModel? GetCurrentUser()
        {
            if (User is not WindowsPrincipal principal)
            {
                return null;
            }

            if (principal.Identity is not WindowsIdentity identity)
            {
                return null;
            }

            var groups = identity.Groups.Select(t => t.Translate(typeof(NTAccount)).Value).ToList();

            using var context = new PrincipalContext(ContextType.Domain);
            using var user = UserPrincipal.FindByIdentity(context, identity.Name);

            if (user is null)
            {
                return null;
            }

            return new CurrentUserJsonModel
            {
                Email = user.EmailAddress,
                Name = user.GivenName,
                Surname = user.Surname,
                MiddleName = user.MiddleName,
                Username = user.Name,
                FullName = user.DisplayName
            };
        }

        [HttpGet("[action]")]
        public Dictionary<string, string> GetDictionary()
        {
            var fi = new FileInfo(GetType().Assembly.Location);

            if (fi.Directory is null)
            {
                return [];
            }

            var dictFile = Path.Combine(fi.Directory.FullName, "dictionary.json");
            var dictData = System.IO.File.ReadAllText(dictFile);

            return JsonConvert.DeserializeObject<Dictionary<string, string>>(dictData) ?? [];
        }
    }
}
