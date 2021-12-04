import { Component, OnInit } from '@angular/core';
import {  LoadingController } from '@ionic/angular';
import { AppServiceService } from 'src/app/service/app-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  menu: any = []
  constructor(public loadingController: LoadingController, private service: AppServiceService) { }

  ngOnInit() {
    this.presentLoading().then(() => {
      this.service.getMenuList(2).subscribe((res) => {
        this.menu = res.document.records;
        this.loadingController.dismiss();
      });
    });
  }
  async presentLoading() {
    const loading = await this.loadingController.create({
      cssClass: "my-custom-class",
      message: "कृपया  थोडा वेळ वाट पहा आम्ही सर्वर वरून डेटा तुमच्या करिता  घेऊन येत आहोत .... ",
    });
    await loading.present();
  }

  goToPage(menu_id) {
    console.log(menu_id + "Clicked");
    
  }
}
