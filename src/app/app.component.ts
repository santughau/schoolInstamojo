import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Login Page 1', url: '/login', icon: 'mail' },
    { title: 'Login Page 2', url: '/login2', icon: 'paper-plane' },
    { title: 'Home Page', url: '/home', icon: 'heart' },
    { title: 'Profile Page', url: '/profile', icon: 'heart' },
    { title: 'Events', url: '/events', icon: 'heart' },
    { title: 'Fees', url: '/fees', icon: 'heart' },
    { title: 'Assignment', url: '/assignment', icon: 'heart' },
    { title: 'Time Table', url: '/timetable', icon: 'heart' },
    { title: 'Result', url: '/result', icon: 'heart' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
