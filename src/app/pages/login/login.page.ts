import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  registerData = {
    email: "",
    password: ""
  };
  type: boolean = true;
  constructor(private _router: Router) { }

  ngOnInit() {
  }

  changeType() {
    this.type = !this.type;
    
  }
  goToHome() {
    this._router.navigate(['/home']);
    console.log(this.registerData);
    
  }
}
