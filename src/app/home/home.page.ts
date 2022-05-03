import { Component, getNgModuleById } from '@angular/core';
import { IonCard, NavController } from '@ionic/angular';
import { InAppBrowser } from '@awesome-cordova-plugins/in-app-browser/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  CopyText: string;
  cardContent: string;


  constructor(private navCtrl:NavController) {}

  openPage4(){
    this.navCtrl.navigateForward('/page4');
  }


  

}
