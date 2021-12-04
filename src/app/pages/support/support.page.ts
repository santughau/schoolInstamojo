import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-support',
  templateUrl: './support.page.html',
  styleUrls: ['./support.page.scss'],
})
export class SupportPage implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit() {
  }
  goBack() {
    this._router.navigate(['/home']);
  }
}
