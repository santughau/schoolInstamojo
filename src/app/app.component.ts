import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Login Page ', url: '/login', icon: 'mail' },
    { title: 'Register Page ', url: '/login2', icon: 'paper-plane' },
    { title: 'Home Page', url: '/home', icon: 'heart' },
    { title: 'Profile Page', url: '/profile', icon: 'heart' },
    { title: 'Events', url: '/events', icon: 'heart' },
    { title: 'Fees', url: '/fees', icon: 'heart' },
    { title: 'Assignment', url: '/assignment', icon: 'heart' },
    { title: 'Time Table', url: '/timetable', icon: 'heart' },
    { title: 'Quiz', url: '/subject', icon: 'heart' },
    { title: 'Result', url: '/result', icon: 'heart' },
    { title: 'Datesheet', url: '/datesheet', icon: 'heart' },
    { title: 'Ask Doubt', url: '/ask-doubt', icon: 'heart' },
    { title: 'Gallery', url: '/gallery', icon: 'heart' },
    { title: 'Change Password', url: '/change-password', icon: 'heart' },
    { title: 'Events & Programs', url: '/event-list', icon: 'heart' },
    { title: 'Events Detail Page', url: '/details-page', icon: 'heart' },
    { title: 'Notification Page', url: '/notification-page', icon: 'heart' },
    { title: 'Account Setting Page', url: '/account-setting', icon: 'heart' },
    { title: 'Student Lsit Page', url: '/student-list', icon: 'heart' },
    { title: 'Code Verification Page', url: '/code-verification', icon: 'heart' },
    { title: 'Support ', url: '/support', icon: 'heart' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() { }
}
