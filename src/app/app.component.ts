import {Component, OnInit } from '@angular/core';    

export class MyItems {    
  Value: string;    
  constructor(Value:string)    
  {    
    this.Value = Value;    
  }    
}    
    
@Component({    
  selector: 'app-root',    
  templateUrl: './app.component.html',    
  styleUrls: ['./app.component.css']    
})    
export class AppComponent  implements OnInit{    

  title = 'Working With Array In Angular 5';    
  today: number = Date.now();
  note1: number = Date.now();


  ngOnInit() {
 }
  // Array where we are going to do CRUD operations    
  myItems: MyItems[] = new Array();    
    
  // Other variables    
  IsForUpdate: boolean = false;    
  newItem: any = {};    
  updatedItem;    
    
  // Provide some values to the array    
  constructor()    
  {    
    this.myItems.push(    
      new MyItems("this is to update schedule"),    
      new MyItems("internal meeting at 2pm"),    
      new MyItems("conference call with clients"),    
    
    );   
  }     

  lastModified: Date;

 AddItem() {    
  this.myItems.push(    
      this.newItem    
  );    
    this.newItem = {};    
}    

// When user selects edit option  


EditItem(i) {  
  this.newItem.Value = this.myItems[i].Value;  
  this.updatedItem = i;  
  this.IsForUpdate = true;  
}  
  
// When user clicks on update button to submit updated value  
UpdateItem() {  
  let data = this.updatedItem;  
  for (let i = 0; i < this.myItems.length; i++) {  
    if (i == data) {  
      this.myItems[i].Value = this.newItem.Value;  
    }  
  }  
  this.IsForUpdate = false;  
  this.newItem = {};  
}  

// To delete specific item  
DeleteItem(i) {  
  this.myItems.splice(i, 1);  
}  

}    