import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChapterListPage } from './chapter-list.page';

const routes: Routes = [
  {
    path: '',
    component: ChapterListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChapterListPageRoutingModule {}
