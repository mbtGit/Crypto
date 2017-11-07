import { Injectable } from '@angular/core';
import { BehaviorSubject } from '../../node_modules/rxjs/BehaviorSubject';

@Injectable()
export class sharedService {

  private aggtegatedEventsSource = new BehaviorSubject<object>({messages: [{ message: "", publisher: ""}]});
  currentAggregatedEvents = this.aggtegatedEventsSource.asObservable();

  constructor() {}

  changeAggregatedEvents(aggregatedEvents: object) {
  	
    this.aggtegatedEventsSource.next(aggregatedEvents);
  }
}