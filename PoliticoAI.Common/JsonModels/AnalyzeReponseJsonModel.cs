using Newtonsoft.Json;

namespace PoliticoAI.Common.JsonModels
{
    public class AnalyzeReponseJsonModel
    {

        [JsonProperty("summary")]
        public string Summary { get; set; }

        [JsonProperty("sentiment")]
        public string Sentiment { get; set; }
        [JsonProperty("bias")]
        public string Bias { get; set; }
    }
}
