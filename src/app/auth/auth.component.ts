import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss',
})
export class AuthComponent {
  email: string;
  password: string;
  IsNotLoggedIn: boolean;

  constructor(private afAuth: AngularFireAuth) {
    this.email = 'prasannaraja@msn.com';
    this.password = 'Welc0me$$';
    this.IsNotLoggedIn = true;
  }

  login() {
    this.afAuth
      .signInWithEmailAndPassword(this.email, this.password)
      .then((user) => {
        console.log('Logged in', user);
        this.email = '';
        this.password = '';
        this.IsNotLoggedIn = false;
      })
      .catch((error) => {
        console.error('Error during login', error);
      });
  }

  logout() {
    this.afAuth
      .signOut()
      .then(() => {
        console.log('Logged out');
        this.IsNotLoggedIn = true;
        window.location.reload();
      })
      .catch((error) => {
        console.error('Error during logout', error);
      });
  }
}
