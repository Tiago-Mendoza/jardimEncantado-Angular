import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { CartItem } from '../models/cart-item.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems: CartItem[] = [];
  private cartCountSubject = new BehaviorSubject<number>(0);
  public cartCount$: Observable<number> = this.cartCountSubject.asObservable();

  constructor() {
    this.loadCart();
  }

  private loadCart(): void {
    try {
      this.cartItems = JSON.parse(localStorage.getItem('cartItems') || '[]');
      this.cartCountSubject.next(this.cartItems.length);
    } catch (_) {
      this.cartItems = [];
      this.cartCountSubject.next(0);
    }
  }

  private saveCart(): void {
    localStorage.setItem('cartItems', JSON.stringify(this.cartItems));
    this.cartCountSubject.next(this.cartItems.length);
  }

  addToCart(item: CartItem): void {
    this.cartItems.push(item);
    this.saveCart();
  }

  getCartItems(): CartItem[] {
    return this.cartItems;
  }

  removeFromCart(index: number): void {
    this.cartItems.splice(index, 1);
    this.saveCart();
  }

  clearCart(): void {
    this.cartItems = [];
    localStorage.removeItem('cartItems');
    this.cartCountSubject.next(0);
  }

  getTotalPrice(): number {
    return this.cartItems.reduce((total, item) => total + (item.price || item.oldPrice || 0), 0);
  }
}

