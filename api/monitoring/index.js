const appInsights = require("applicationinsights");
appInsights.setup();
const client = appInsights.defaultClient;

module.exports = async function (context, req) {
    var what = req.params.what ? req.params.what.toLowerCase() : null;
    // important: use context.log and NOT console.log !

    switch (what) {
        case 'wait': {
            context.log('Starting long operation...');
            var rand = Math.round(Math.random() * 10);
            await sleep(1000 * rand);
            context.log("Operation completed successfully [" + rand + " secs.]");
            break;
        }
        case 'loglevels': {
            context.log('This is a simple log message');
            context.log.warn('This is a [warn] message');
            context.log.info('This is a [info] log message');
            context.log.error('This is a [error] log message');
            break;
        }
        case 'ai': {
           
            // Use this with 'tagOverrides' to correlate custom telemetry to the parent function invocation.
            var operationIdOverride = { "ai.operation.id": context.traceContext.traceparent };

            client.trackEvent({ name: "my custom event", tagOverrides: operationIdOverride, properties: { customProperty2: "custom property value" } });
            client.trackException({ exception: new Error("handled exceptions can be logged with this method"), tagOverrides: operationIdOverride });
            client.trackMetric({ name: "custom metric", value: 3, tagOverrides: operationIdOverride });
            client.trackTrace({ message: "trace message", tagOverrides: operationIdOverride });
            client.trackDependency({ target: "http://dbname", name: "select customers proc", data: "SELECT * FROM Customers", duration: 231, resultCode: 0, success: true, dependencyTypeName: "ZSQL", tagOverrides: operationIdOverride });
            client.trackRequest({ name: "GET /customers", url: "http://myserver/customers", duration: 309, resultCode: 200, success: true, tagOverrides: operationIdOverride });
            break;
        }
        default: {
            context.res = { status: 500, body: 'Unhandled what parameters: [' + what + ']' };
        }
    }
}


function sleep(ms) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
}