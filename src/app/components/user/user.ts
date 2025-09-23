import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { Master } from '../../services/master';

@Component({
  selector: 'app-user',
  imports: [FormsModule],
  templateUrl: './user.html',
  styleUrl: './user.css'
})
export class User implements OnInit {

  http = inject(HttpClient);
  userList: any[] = [];

  masterService = inject(Master);

  userObject: any = {
    "userId": 0,
    "emailId": "",
    "password": "",
    "fullName": "",
    "mobileNo": ""
  }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this.masterService.getUsers()
      .subscribe((data: any) => {
        debugger
        this.userList = data;
      });
  }

  onUserSave() {
    this.http.post('https://api.freeprojectapi.com/api/GoalTracker/register', this.userObject)
      .subscribe({
        next: (result) => {
          debugger
          alert('User Registered Successfully');
          this.getUsers();
        },
        error: (error) => {
          debugger
          alert('Error Occurred - ' + error.error)
        },
      })
  }

  reset() {
    this.userObject = {
      "userId": 0,
      "emailId": "",
      "password": "",
      "fullName": "",
      "mobileNo": ""
    }
  }

  onEdit(item: any) {
    this.userObject = item;
  }

  onUserUpdate() {
    this.userObject.createdDate = new Date();
    this.http.put("https://api.freeprojectapi.com/api/GoalTracker/updateUser?id=" + this.userObject.userId, this.userObject)
      .subscribe({
        next: (result) => {
          debugger
          alert('User Update Successfully');
          this.getUsers();
        },
        error: (error) => {
          debugger
          alert('Error Occurred - ' + error.error)
        },
      })
  }

  onDelete(item: any) {
    if (confirm("Are you sure to delete " + item.fullName + " ?")) {
      this.http.delete("https://api.freeprojectapi.com/api/GoalTracker/deleteUserById?id=" + item.userId)
        .subscribe({
          next: (result) => {
            debugger
            alert('User Deleted Successfully');
            this.getUsers();
          },
          error: (error) => {
            debugger
            alert('Error Occurred - ' + error.error)
          },
        })
    }
  }
}
