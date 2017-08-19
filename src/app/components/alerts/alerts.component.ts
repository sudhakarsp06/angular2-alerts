import { Component, OnInit } from '@angular/core';
import { AlertsService } from '../../services/alerts.service';
import { AlertsConfig } from './alerts.config';

@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.css']
})
export class AlertsComponent implements OnInit {
	public messages: Object[] = [];
	public alertclass;
	public  styles;
	public settings;
  constructor(private alerts: AlertsService) { 
  	
  this.alertclass = new AlertsConfig();
  this.settings = this.alertclass.setSettings();

  }

  ngOnInit() {
  this.alerts.alertsObs.subscribe( (object) => {
  		object['styles'] = this.alertclass.getstyles(object['type']);
  		this.messages.push(object);
  		if(this.settings.timeout > 0) {
  			setTimeout( () => {
	  			this.removeMessage(object);
	  		},this.settings.timeout * 1000);
  		}
  			

  	})

  }

  removeMessage(message: Object) {
  		this.messages.splice(this.messages.indexOf(message),1);
  }

}
