using Newtonsoft.Json;

namespace PoliticoAI.Common.JsonModels
{
    public class CurrentUserJsonModel
    {
        [JsonProperty("name")]
        public string Name { get; set; }

        [JsonProperty("middleName")]
        public string MiddleName { get; set; }

        [JsonProperty("surname")]
        public string Surname { get; set; }

        [JsonProperty("fullName")]
        public string FullName { get; set; }

        [JsonProperty("email")]
        public string Email { get; set; }

        [JsonProperty("username")]
        public string Username { get; set; }
    }
}
