import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ProjectManagementUI';

  username: string;

  loggedin() {
    this.username = "Welcome, " + localStorage.getItem('token');
    return localStorage.getItem('token');
  }
  onLogout() {
    localStorage.removeItem('token');
  }
}