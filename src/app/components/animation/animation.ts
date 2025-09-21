import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-animation',
  imports: [],
  templateUrl: './animation.html',
  styleUrl: './animation.css'
})
export class Animation {
  isShown = signal(false);
  toggle() {
    this.isShown.update((isShown) => !isShown);
  }
}
