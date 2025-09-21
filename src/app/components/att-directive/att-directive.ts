import { CurrencyPipe, DatePipe, JsonPipe, LowerCasePipe, NgClass, NgStyle, SlicePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, OnDestroy, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-att-directive',
  imports: [NgClass,
    NgStyle,
    UpperCasePipe,
    LowerCasePipe,
    TitleCasePipe,
    SlicePipe,
    JsonPipe,
    DatePipe,
    CurrencyPipe,
  ],
  templateUrl: './att-directive.html',
  styleUrl: './att-directive.css'
})
export class AttDirective implements OnInit,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy {

  div1 = signal<string>('')

  setBgClass(classname: string) {
    this.div1.set(classname);
  }

  isdiv2Green: boolean = true;

  toggleColor() {
    this.isdiv2Green = !this.isdiv2Green
  }

  constructor() {
    console.log('constructor')
  }

  ngOnInit(): void {
    console.log('ngOnInit')
    //for api call
    //subscribe
  }
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit')

  }
  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked')
  }
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit')
    //subscribe

  }
  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked')
  }
  ngOnDestroy(): void {
    console.log('ngOnDestroy')
    //unsubscribe
  }

  name: string = 'Angular';

  namelist: string[] = ['Angular', 'React', 'Vue', 'Node']

  studentObject: any = {
    name: 'Sajith',
    age: 26,
    city: 'Colombo'
  }

  currentDate: Date = new Date();
  amount: number = 1599.99;

}
