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
        public static async Task<IActionResult> Run(
            [HttpTrigger(AuthorizationLevel.Anonymous, "get", "post",
            Route = "messages/{say:alpha?}")] HttpRequest req,
            string say,
            ILogger log)
        {
            log.LogInformation("Hello from the dotnet Logger");

            var method = req.Method.ToLower();
            string name = null;
            if ("get" == method) name = req.Query["name"];
            else if ("post" == method)
            {
                string requestBody = String.Empty;
                using (StreamReader streamReader = new StreamReader(req.Body))
                {
                    requestBody = await streamReader.ReadToEndAsync();
                }
                dynamic data = JsonConvert.DeserializeObject(requestBody);
                name = data?.name;
            }

            return new OkObjectResult(new { text = (name != null ? name + " says: " : "") + (say != null ? say : "Hello") + " from the dotnet API" });
        }
    }
}
