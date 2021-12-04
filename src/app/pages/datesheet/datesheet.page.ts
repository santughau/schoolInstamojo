import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-datesheet',
  templateUrl: './datesheet.page.html',
  styleUrls: ['./datesheet.page.scss'],
})
export class DatesheetPage implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit() {
  }
  goBack() {
    this._router.navigate(['/home']);
  }
}
