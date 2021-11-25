import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login2',
  templateUrl: './login2.page.html',
  styleUrls: ['./login2.page.scss'],
})
export class Login2Page implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit() {
  }
  goToHome() {
    this._router.navigate(['/home']);
  }
}
