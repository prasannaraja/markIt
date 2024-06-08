import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'markIt';
  constructor(public afAuth: AngularFireAuth) {}

  logout() {
    this.afAuth
      .signOut()
      .then(() => {
        console.log('Logged out');
      })
      .catch((error) => {
        console.error('Error during logout', error);
      });
  }
}
