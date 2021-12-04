import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DatesheetPageRoutingModule } from './datesheet-routing.module';

import { DatesheetPage } from './datesheet.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DatesheetPageRoutingModule
  ],
  declarations: [DatesheetPage]
})
export class DatesheetPageModule {}
