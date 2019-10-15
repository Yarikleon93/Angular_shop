import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-goods',
  templateUrl: './goods.component.html',
  styleUrls: ['./goods.component.css']
})
export class GoodsComponent implements OnInit {
  public goods: Goods[] = [
    {id: 1, title:'Мармелад',  kind:'Ягодный коктель', img:'http://organic-shop.net/upload/iblock/ed1/ed1cb4c4be363205778e365f3b5f9cca.jpg', price:120, description: 'Подсластитель мальтит, сироп инулина, подсластитель сорбит, желирующий агент желатин, регулятор кислотности лимонная кислота.'},
    {id: 2, title:'Мармелад',  kind:'Жевательный Racionika Diet', img:'http://organic-shop.net/upload/iblock/8ca/8caf4f0f1d469023a782c28a39e8a6e1.jpg', price:150, description: 'Подсластитель мальтит, сироп инулина, подсластитель сорбит, желирующий агент желатин, регулятор кислотности лимонная кислота.'},
    {id: 3, title:'Батончик',  kind:'Racionika', img:'http://organic-shop.net/upload/iblock/ed1/ed1cb4c4be363205778e365f3b5f9cca.jpg', price:130, description: 'Подсластитель мальтит, сироп инулина, подсластитель сорбит, желирующий агент желатин, регулятор кислотности лимонная кислота.'},
    {id: 4, title:'Батончик',  kind:'Ягодный коктель', img:'http://organic-shop.net/upload/iblock/ed1/ed1cb4c4be363205778e365f3b5f9cca.jpg', price:110, description: 'Подсластитель мальтит, сироп инулина, подсластитель сорбит, желирующий агент желатин, регулятор кислотности лимонная кислота.'},
    {id: 5, title:'Мармелад',  kind:'Со вкусом кофе', img:'http://organic-shop.net/upload/iblock/ed1/ed1cb4c4be363205778e365f3b5f9cca.jpg', price:120, description: 'Подсластитель мальтит, сироп инулина, подсластитель сорбит, желирующий агент желатин, регулятор кислотности лимонная кислота.'}
  ]


  constructor() { }

  ngOnInit() {

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