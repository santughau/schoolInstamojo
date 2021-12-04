import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AskDoubtPageRoutingModule } from './ask-doubt-routing.module';

import { AskDoubtPage } from './ask-doubt.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AskDoubtPageRoutingModule
  ],
  declarations: [AskDoubtPage]
})
export class AskDoubtPageModule {}
