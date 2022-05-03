import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Page1PageRoutingModule } from './page1-routing.module';

import { Page1Page } from './page1.page';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';   // for google maps plugin
import { GoogleMap } from '@capacitor/google-maps';

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],  // for google maps plugin
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Page1PageRoutingModule,
    
  ],
  declarations: [Page1Page]
})
export class Page1PageModule {}
