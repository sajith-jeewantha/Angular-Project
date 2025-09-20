import { ChangeDetectorRef, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  imports: [FormsModule],
  templateUrl: './data-binding.html',
  styleUrl: './data-binding.css'
})
export class DataBinding {

  private _productName: string = "iPhone 13 pro max"
  private _productPrice: number = 4500000
  private _maxLength: number = 5;
  private _myColor: String = "myColor"
  private _input: string = ''

  constructor() {

  }

  get productPrice() {
    return this._productPrice
  }

  get productName() {
    return this._productName
  }

  get maxLength() {
    return this._maxLength
  }

  get myColor() {
    return this._myColor
  }

  showWelcome() {
    alert("Welcome Message")
  }

  set productName(value: string) {
    this._productName = value
  }

  changeProductName(newName: string) {
    this._productName = newName
  }

  get input(): String {
    return this._input
  }

  set input(input: string) {
    this._input = input
  }

  clear(): void {
    this._input = ''
  }

  onCityChange() {
    alert("City Changed")
  }
}
