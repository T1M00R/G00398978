import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';
import { Page4Page } from '../pages/weather/page4.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
  {
    path: 'page4',
    component: Page4Page,
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
