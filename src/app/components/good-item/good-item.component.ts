import { Component, OnInit,Input} from '@angular/core';

@Component({
  selector: 'app-good-item',
  templateUrl: './good-item.component.html',
  styleUrls: ['./good-item.component.css']
})
export class GoodItemComponent implements OnInit {

  public incard: Goods[] = [];
  login:boolean = false;
  add_to_cart:boolean;
  in_basket:boolean;
  @Input() good;


  constructor() { }

  Addtocart(id){
  this.incard = JSON.parse(localStorage.getItem('incard')) || [];
  this.incard.push(this.good);
  localStorage.setItem('incard', JSON.stringify(this.incard));
  this.incard = JSON.parse(localStorage.getItem('incard'));
  let addCard = this.incard.find((obj) => {
    return obj.id == id
  })
  if(addCard){
    this.add_to_cart = false;
    this.in_basket = true;
  }
}

  ngOnInit() {
    let user = JSON.parse(localStorage.getItem('users_author'));
    if(user) {
      this.login = true;
      this.add_to_cart = true;
    }
    
    
  }

}


interface Goods {
  id: number,
  title:string,
  kind:string,
  img:string,
  price:number,
  description:string
}