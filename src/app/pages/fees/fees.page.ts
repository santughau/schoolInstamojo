import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fees',
  templateUrl: './fees.page.html',
  styleUrls: ['./fees.page.scss'],
})
export class FeesPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  payNow() {
    this.router.navigate(['/pay-online'])
  }
}
