import { Component, inject } from '@angular/core';
import { Master } from '../../services/master';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layout',
  imports: [RouterLink, RouterOutlet],
  templateUrl: './layout.html',
  styleUrl: './layout.css'
})
export class Layout {
  loggedUsername: string = ''

  router = inject(Router);

  constructor(private masterService: Master) {
    this.readLoggedData();
    this.masterService.onLogin.subscribe(res => {
      this.readLoggedData();
    })
  }

  readLoggedData() {
    const storedUser = localStorage.getItem('loggedUser');
    if (storedUser != null) {
      this.loggedUsername = storedUser;
    }
  }

  onLogout() {
    localStorage.removeItem('loggedUser');
    this.readLoggedData();
    this.loggedUsername = '';
    this.masterService.onLogin.next(false);
    this.router.navigateByUrl('/login');
  }
}
