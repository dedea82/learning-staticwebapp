import { ApplicationInsights } from '@microsoft/applicationinsights-web'

export default (process.env.VUE_APP_APPINSIGHTS_INSTRUMENTATIONKEY ? new ApplicationInsights({
    config: {
        instrumentationKey: process.env.VUE_APP_APPINSIGHTS_INSTRUMENTATIONKEY,
        autoTrackPageVisitTime: true,
        enableAutoRouteTracking: true, // enable automatic route change tracking for your single page application
    }
}) : null);