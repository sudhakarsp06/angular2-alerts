# Alerts

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.2.6.

## How to use
Add the below line
import {AlertsService} from './services/alerts.service';

And this line to providers
providers: [AlertsService]

## How to include it in Component

import { AlertsService } from '<your path>/services/alerts.service';

Add a line in constructor
constructor(private alerts: AlertsService) { }

And make the call

this.alerts.setMessage(message, type);

type can be 'error', 'success'  or 'warn'

## Incude it in the HTML

Open app.component.html file and add the below line
<app-alerts></app-alerts>

## You can add more types

Open the file '<path>/component/alerts/alerts.config.ts' and edit the lines under "AlertsConfigData". You can add more types and configure the alert popup colours and background colours here.
