import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-popup-component',
  templateUrl: './popup-component.page.html',
  styleUrls: ['./popup-component.page.scss'],
})
export class PopupComponentPage implements OnInit {

  constructor(public popoverController: PopoverController) { }

  ngOnInit() {
  }
  close() {
    this.popoverController.dismiss();
}
}
