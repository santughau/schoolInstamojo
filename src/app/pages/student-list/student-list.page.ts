import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PopoverController } from '@ionic/angular';
import { PopupComponentPage } from '../popup-component/popup-component.page';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.page.html',
  styleUrls: ['./student-list.page.scss'],
})
export class StudentListPage implements OnInit {

  constructor(private _router: Router,public popoverController: PopoverController) { }

  ngOnInit() {
  }
  goBack() {
    this._router.navigate(['/home']);
  }


  async presentPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: PopupComponentPage,
      event: ev,
      mode: 'ios',
      translucent: true
    });
    await popover.present();
    const { role } = await popover.onDidDismiss();
  }
}
