import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { baseUrl } from '../environment/environment';
import { WeatherforecastModel } from '../app/models/weatherforecast.model';

@Injectable({
  providedIn: 'root'
})
export class WeatherforecastApiService {

  private readonly apiUrl = `${baseUrl}/Weatherforecast`;

  constructor(private http: HttpClient) {}

  getWeatherForecast(): Observable<WeatherforecastModel[]> {
    return this.http.get<WeatherforecastModel[]>(this.apiUrl);
  }
}