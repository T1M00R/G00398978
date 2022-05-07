import { Component, getNgModuleById, OnInit } from '@angular/core';
import { listenerCount } from 'process';
import { element } from 'protractor';
import { Storage } from '@ionic/storage-angular';


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
    
  ]


  
  // using storage
  constructor(private storage:Storage) { }



  ngOnInit() {
    this.ionViewDidEnter();
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

  // Data persistence 
  saveList(){
    this.storage.create()   // checks if storage base is created , returns a promise
    .then(()=>{
      this.storage.set("list", this.bucketList)
      .then(()=>{
        console.log(this.bucketList)
      })
      .catch();    // save bucket list
    }).
    catch(); 

  }

  ionViewDidEnter(){
      this.storage.create()
      .then(()=>{
        this.storage.get("list")
        .then((list)=>{
          this.bucketList = list;
        })
        .catch()
      })
      .catch();
  }

}
