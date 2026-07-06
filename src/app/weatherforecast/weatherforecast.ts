import { Component, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherforecastApiService } from '../../services/weatherforecast.api.service';
import { WeatherforecastModel } from '../models/weatherforecast.model';

@Component({
  selector: 'app-weatherforecast',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './weatherforecast.html',
  styleUrl: './weatherforecast.css',
})
export class Weatherforecast implements OnInit {

  private weatherService = inject(WeatherforecastApiService);

  weatherForecasts = signal<WeatherforecastModel[]>([]);
  loading = signal(true);
  error = signal<string | null>(null);

  ngOnInit(): void {
    this.loadWeatherForecast();
  }

  loadWeatherForecast(): void {
    this.loading.set(true);

    this.weatherService.getWeatherForecast().subscribe({
      next: (data) => {
        this.weatherForecasts.set(data);
        this.loading.set(false);
      },
      error: (err) => {
        console.error(err);
        this.error.set('Failed to load weather forecast.');
        this.loading.set(false);
      }
    });
  }
}