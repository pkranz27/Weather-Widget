import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { WeatherReportComponent } from './weather-report/weather-report/weather-report.component';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon'; 
import {MatSelectModule} from '@angular/material/select';
import { RouterModule, Routes,Router } from '@angular/router';
import { WeatherServiceComponent } from './weather-report/weather-service/weather-service.component';
import {MatCardModule} from '@angular/material/card';
import { HttpClientModule, HttpClient } from '@angular/common/http';

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
@NgModule({
  declarations: [
    AppComponent,
    WeatherReportComponent,
    WeatherServiceComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(
      routes,
      {enableTracing: true}
    ),
    ReactiveFormsModule,
    FormsModule ,
    MatToolbarModule,
    HttpClientModule,
    MatCardModule,
    MatIconModule,
    MatSelectModule
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent],

  
})
export class AppModule { }
