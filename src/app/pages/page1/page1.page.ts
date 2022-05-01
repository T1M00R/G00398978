import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.page.html',
  styleUrls: ['./page1.page.scss'],
})
export class Page1Page implements OnInit {

  // requried to open page
  constructor(private navCtrl:NavController) {}

  ngOnInit() {
  }

  

  openPage4(){
    this.navCtrl.navigateForward('/page4');
  }

}
