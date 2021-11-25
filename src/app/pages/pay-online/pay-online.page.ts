import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-pay-online',
  templateUrl: './pay-online.page.html',
  styleUrls: ['./pay-online.page.scss'],
})
export class PayOnlinePage implements OnInit {
  id;
  constructor(private _router: Router) { }

  ngOnInit() {
  }
  changeMethod(val){
    this.id = val;
  }

  goBack() {
    this._router.navigate(['/home']);
  }
}
