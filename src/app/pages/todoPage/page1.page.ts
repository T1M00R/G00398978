import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { IonCard, IonCardContent, IonList, NavController } from '@ionic/angular';
import { findItemLabel } from '@ionic/core/dist/types/utils/helpers';


@Component({
  selector: 'app-page1',
  templateUrl: './page1.page.html',
  styleUrls: ['./page1.page.scss'],
})
export class Page1Page implements OnInit {


  todoList = [{
    itemName : 'Coding',
    itemDueDate : '13-10-22',
    itemPriority : 'high',
    itemCategory : 'work'
  },
  {
    itemName : 'Design',
    itemDueDate : '28-10-22',
    itemPriority : 'low',
    itemCategory : 'work'
  },
  {
    itemName : 'Workout',
    itemDueDate : '13-10-22',
    itemPriority : 'middle',
    itemCategory : 'personal'
  }
  ]

  today : number = Date.now();

  // requried to open page
  constructor(private navCtrl:NavController) {}

  ngOnInit() {
  }

  
  

  openPage4(){
    this.navCtrl.navigateForward('/page4');
  }

  // On floating action button press, add a card to the todo list menu
  addTask(){
    
    
    
  }

  // When task is deleted run method below
  deleteTask(id){

    var task = document.getElementById(id);
    task.remove();
    
    // prompt confirmation before deleting
  }

  
  

}
