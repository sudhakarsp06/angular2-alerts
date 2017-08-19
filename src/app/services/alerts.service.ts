import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs/Subject';

export interface AlertsInterface {
	alertsSubject:Subject<Object>;
	setMessage(message: string, type: string);
}
 
@Injectable()
export class AlertsService implements AlertsInterface 	 {
 
  // Observable alerts
  alertsSubject = new Subject<Object>();
 
  // Observable string streams
  alertsObs = this.alertsSubject.asObservable();

  // Service message commands
  setMessage(message: string, type: string) {
    this.alertsSubject.next({message:message,type:type, styles:{}});
  }


}