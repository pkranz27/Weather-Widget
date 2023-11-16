import {Weather}
    const routes: Routes = [
    {
      path: "",
      component: WeatherReportComponent,
    },
    {
      path: ":locationName",
      component: WeatherReportComponent,
    },
  ];
  