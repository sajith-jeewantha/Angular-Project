import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-get-api',
  imports: [],
  templateUrl: './get-api.html',
  styleUrl: './get-api.css'
})
export class GetApi implements OnInit {

  http = inject(HttpClient);
  userList: any[] = [];
  todoList: any[] = [];
  busBookingList: any[] = [];

  constructor() { }

  getUsers() {
    this.http.get('https://jsonplaceholder.typicode.com/users')
      .subscribe((response: any) => {
        this.userList = response;
      });
  }

  getTodos() {
    this.http.get('https://jsonplaceholder.typicode.com/todos')
      .subscribe((response: any) => {
        this.todoList = response;
      });
  }

  getAllBusBookingApi() {
    this.http.get('https://api.freeprojectapi.com/api/BusBooking/GetAllUsers')
      .subscribe((response: any) => {
        this.busBookingList = response.data;
      });
  }

  ngOnInit(): void {
    this.getUsers();
    this.getTodos();
    this.getAllBusBookingApi();
  }
}
