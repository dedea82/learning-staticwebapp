using System;
using System.IO;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Azure.WebJobs;
using Microsoft.Azure.WebJobs.Extensions.Http;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;

namespace api_dotnet
{
    public static class messages
    {
        [FunctionName("messages")]
        public static IActionResult Run(
            [HttpTrigger(AuthorizationLevel.Anonymous, "get", Route = "messages")] HttpRequest req,
            ILogger log)
        {
            log.LogInformation("Hello from the dotnet Logger");
            return new OkObjectResult(new { text = "Hello from the dotnet API" });
        }
    }
}
