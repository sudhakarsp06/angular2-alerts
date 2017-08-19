import { Component } from '@angular/core';
import { AlertsService } from '../../services/alerts.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  title = 'app';
  constructor(private alerts: AlertsService) { }

  SetMessage(message: string, type: string) {
  	this.alerts.setMessage(message, type);

  }
}
