import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChapterListPageRoutingModule } from './chapter-list-routing.module';

import { ChapterListPage } from './chapter-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChapterListPageRoutingModule
  ],
  declarations: [ChapterListPage]
})
export class ChapterListPageModule {}
