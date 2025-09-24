import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-signal-ex',
  imports: [],
  templateUrl: './signal-ex.html',
  styleUrl: './signal-ex.css'
})

export class SignalEx {

  firstName: string = "Sajith";
  productName = "Mac";
  courseName = signal<string>("Angular");
  courseDuration = signal("10 days");

  courseDetail = computed(() => this.courseName() + " in " + this.courseDuration())

  constructor() {

    this.firstName = "John"
    console.log(this.firstName)

    console.log(this.courseName())
    setTimeout(() => {
      this.courseName.set("React")
    }, 5000)
    console.log(this.courseName())
  }

}
