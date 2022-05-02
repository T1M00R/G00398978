import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { IonCard, IonCardContent, IonList, IonText, ModalController, NavController } from '@ionic/angular';
import { Mode } from '@ionic/core';



@Component({
  selector: 'app-page1',
  templateUrl: './page1.page.html',
  styleUrls: ['./page1.page.scss'],
})
export class Page1Page implements OnInit {

  today : number = Date.now();

  // requried to open page
  constructor(private navCtrl:NavController) {}

  ngOnInit() {
  }

  
  
  

  openPage4(){
    this.navCtrl.navigateForward('/page4');
  }

  


  
  

}
