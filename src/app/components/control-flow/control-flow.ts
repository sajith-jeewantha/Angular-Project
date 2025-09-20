import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-control-flow',
  imports: [FormsModule],
  templateUrl: './control-flow.html',
  styleUrl: './control-flow.css'
})

export class ControlFlow {
  isMessageVisiable: boolean = true;
  buttonMessage: string = 'Hide Message'

  startMonthName:string ="jan"

  cityList: string[] =["Colombo 1","Colombo 2","Colombo 3"]

  studentList: any[]=[
    {name: "John",city:"colombo 1", isActive:false},
    {name: "Kamal",city:"colombo 2", isActive:true},
    {name: "Nuwan",city:"colombo 3", isActive:false}
  ]

  messageVisibility() {
    if (this.isMessageVisiable) {
      this.isMessageVisiable = false
      this.buttonMessage = "Show Message"
    } else {
      this.isMessageVisiable = true
      this.buttonMessage = "Hide Message"
    }
  }

}
