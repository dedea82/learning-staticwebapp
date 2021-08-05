# Learning Static Web App (on Azure)

This repository contains a demo web application (written in Vue) that can be used with as a starting point for learning SWA (Static Web App) 

## Learning Points
* Static Web Apps
* API support with Azure Functions
* GitHub Actions workflows for Azure Static Web Apps
* Enable monitoring

## Terminal Pills
    swa start .\dist\ --api ..\api\ --run "npm run build"     // build and run SWA
    func init --dotnet|--javascript|--python    // initialize \api folder
    func new --template "Http Trigger" --name api-name  // create new function


## Resources

* [Azure Static Web Apps documentation](https://docs.microsoft.com/en-us/azure/static-web-apps/) - Microsoft Docs
    * [What is Azure Static Web Apps?](https://docs.microsoft.com/en-us/azure/static-web-apps/overview)
    * [Hosting plans and Pricing](https://azure.microsoft.com/en-us/pricing/details/app-service/static/)


* [Azure Static Web Apps - Learning Path](https://docs.microsoft.com/en-us/learn/paths/azure-static-web-apps/) - Microsoft Learn
    * [Templates and Examples](https://github.com/MicrosoftDocs?q=staticwebapp) - GitHub @MicrosoftDocs

* [10 Things To Know About Azure Static Web Apps](https://dev.to/azure/10-things-to-know-about-azure-static-web-apps-3n4i)
* [Awesome Azure Static Web Apps](https://github.com/staticwebdev/awesome-azure-static-web-apps) - GitHub [@staticwebdev](https://github.com/staticwebdev)
* [Azure Static Web Apps CLI](https://github.com/Azure/static-web-apps-cli)
* [Application Insights for web pages](https://docs.microsoft.com/en-us/azure/azure-monitor/app/javascript)


