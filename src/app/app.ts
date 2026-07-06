import { Component, signal } from '@angular/core';
import { Weatherforecast } from "./weatherforecast/weatherforecast";

@Component({
  selector: 'app-root',
  imports: [ Weatherforecast],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('GithubActionsDemo');
}
