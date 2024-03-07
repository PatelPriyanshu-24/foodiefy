import { Injectable } from '@angular/core';
import { cart } from '../shared/models/cart';
import { BehaviorSubject, Observable } from 'rxjs';
import { Food } from '../shared/models/food';
import { CartItems } from '../shared/models/cartItems';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cart: cart = this.getcartfromlocalstorage();
  private cartsubject: BehaviorSubject<cart> = new BehaviorSubject(this.cart);
  constructor() {}

  addtocart(food: Food) {
    let cartItems = this.cart.items.find((iteams) => iteams.food.id == food.id);
    if (cartItems) return;
    this.cart.items.push(new CartItems(food));
    this.setcarttolocalstorage()
  }

  removefoodCart(foodId: string): void {
    this.cart.items = this.cart.items.filter(
      (items) => items.food.id != foodId
    );
    this.setcarttolocalstorage()
  }

  changequantity(foodId: String, quantity: number) {
    let cartItems = this.cart.items.find((item) => item.food.id === foodId);
    if (!cartItems) return;
    cartItems.quantity = quantity;
    cartItems.price = quantity * cartItems.food.price;
    this.setcarttolocalstorage()
  }

  clearcart() {
    this.cart = new cart();
    this.setcarttolocalstorage()
  }
  getcartobservable(): Observable<cart> {
    return this.cartsubject.asObservable();
  }

  private setcarttolocalstorage(): void {
    this.cart.totalPrice = this.cart.items.reduce(
      (prevSum, currentItem) => prevSum + currentItem.price,
      0
    );
    this.cart.totalCount= this.cart.items.reduce((prevSum, currentItem)=>prevSum + currentItem.quantity,0)
    const cartJson = JSON.stringify(this.cart);
    localStorage.setItem('cart', cartJson);
    this.cartsubject.next(this.cart);
  }
  private getcartfromlocalstorage(){
    const cartJson= localStorage.getItem('cart')
    return cartJson? JSON.parse(cartJson):new cart();
  }

}
