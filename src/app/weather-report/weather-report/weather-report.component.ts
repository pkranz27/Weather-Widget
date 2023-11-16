import { Component, OnInit } from '@angular/core';
import { Observable, map, filter, concatMap } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { WeatherServiceComponent } from '../weather-service/weather-service.component';
@Component({
  selector: 'app-weather-report',
  templateUrl: './weather-report.component.html',
  styleUrls: ['./weather-report.component.css']
})
export class WeatherReportComponent implements OnInit {
  data$:Observable<any>;
  today
  constructor( private weatherService: WeatherServiceComponent,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.data$= this.route.params.pipe(
      map((params) => params["locationName"]),
      filter((name) => !!name),
      concatMap((name) => this.weatherService.getWeatherForCity(name))
    )
  }

}
