import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Master {
  constructor(private http: HttpClient) { }

  onLogin: Subject<boolean> = new Subject<boolean>();

  getUsers() {
    return this.http.get('https://api.freeprojectapi.com/api/GoalTracker/getAllUsers')
  }

}
