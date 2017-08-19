import { Component } from '@angular/core';
import { AlertsService } from './services/alerts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AlertsService]
})
export class AppComponent {
  title = 'app';
  constructor() { }
}
