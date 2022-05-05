import { Component, getNgModuleById, OnInit } from '@angular/core';
import { element } from 'protractor';


@Component({
  selector: 'app-page3',
  templateUrl: './page3.page.html',
  styleUrls: ['./page3.page.scss'],
})
export class Page3Page implements OnInit {

  textbox: any;

  // List array for displaying
  // add storage for this
  bucketList = [
    "item1", 
    "item2"
  ]

  constructor() { }

  ngOnInit() {
  }

  addToBucketList(item){

    this.bucketList.push(item);

  }
  
  clearList(){
    
    // for each item, remove it

    let i : number;
    length = this.bucketList.length;

    for (i = 0; i < length; i++){
      this.bucketList.pop();
    }


  }


}
