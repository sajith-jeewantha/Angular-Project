import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Master } from '../../services/master';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {

  route = inject(Router);
  master = inject(Master);

  loginObject:any = {
    username: '',
    password: ''
  };

  onLogin() {
    if(this.loginObject.username === 'sajith' && this.loginObject.password === '1234') {

      this.route.navigateByUrl('/admin')
      localStorage.setItem('loggedUser', this.loginObject);
      this.master.onLogin.next(true);

    } else {
      alert('Invalid Credentials');
    }
  }
}
