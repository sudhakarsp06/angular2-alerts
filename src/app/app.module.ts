import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AlertsComponent } from './components/alerts/alerts.component';
import {AlertsService} from './services/alerts.service';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    AlertsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [AlertsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
