import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DatesheetPage } from './datesheet.page';

const routes: Routes = [
  {
    path: '',
    component: DatesheetPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DatesheetPageRoutingModule {}
