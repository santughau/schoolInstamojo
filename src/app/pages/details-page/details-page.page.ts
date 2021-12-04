import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-details-page',
  templateUrl: './details-page.page.html',
  styleUrls: ['./details-page.page.scss'],
})
export class DetailsPagePage implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit() {
  }
  goBack() {
    this._router.navigate(['/home']);
  }
}
