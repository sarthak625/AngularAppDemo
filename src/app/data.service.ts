import { Injectable } from '@angular/core';
import { ajax } from 'rxjs/ajax';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private goals = new BehaviorSubject<any>(['The initial goal','Another silly life goal']);
  goal = this.goals.asObservable();

  constructor() { }

  changeGoals(goal){
    this.goals.next(goal);
  }
}
