import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnInit {
  count_good:number;
  basket:Goods[];

  public inbasket: Goods[] = [];


  displayedColumns: string[] = ['position', 'title', 'kind', 'price', 'kol', 'delete'];
  //dataSource = this.inbasket;

  constructor() { 
  }

  onChange(id){

    console.log(id);
    
  }

  dell(id){
    this.basket = JSON.parse(localStorage.getItem('incard'))
    let del = this.basket.findIndex((obj)=>{return obj.id==id})
    this.basket.splice(del,1);
    localStorage.setItem('incard', JSON.stringify(this.basket));
    window.location.reload();  
  }



  ngOnInit() {

    
    this.inbasket = JSON.parse(localStorage.getItem('incard'));
    let a,k;
    this.inbasket.forEach((item)=>{
      a = item.price;
      k = a + item.price;
      return k;
    })
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