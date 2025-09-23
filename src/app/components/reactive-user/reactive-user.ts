import { JsonPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-user',
  imports: [ReactiveFormsModule],
  templateUrl: './reactive-user.html',
  styleUrl: './reactive-user.css'
})
export class ReactiveUser implements OnInit {

  http = inject(HttpClient);
  userList: any[] = [];

  userFrom: FormGroup = new FormGroup({
    userId: new FormControl(0),
    fullName: new FormControl('', [Validators.required]),
    emailId: new FormControl('', [Validators.required, Validators.email, Validators.pattern('\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+')]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    mobileNo: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]),
  });

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this.http.get('https://api.freeprojectapi.com/api/GoalTracker/getAllUsers')
      .subscribe((data: any) => {
        this.userList = data;
      });
  }

  onSaveUser() {
    debugger
    this.http.post('https://api.freeprojectapi.com/api/GoalTracker/register', this.userFrom.value)
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
}