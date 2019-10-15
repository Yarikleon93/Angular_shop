import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  user_email:any;
  email:any;
  basket:any;
  count:number;
  logout(){
    localStorage.removeItem('users_author');
    localStorage.removeItem('incard');
  }
  constructor() { }

  ngOnInit() {
    this.user_email = JSON.parse(localStorage.getItem('users_author'));
    if(!this.user_email){
      this.email = "";
    }
    else{
      this.email = this.user_email.email;
    }
    this.basket = JSON.parse(localStorage.getItem('incard'));
    if ( !this.basket){
      this.count =  0;
    }
    else {
      this.count = this.basket.length;
    }
  }

}
