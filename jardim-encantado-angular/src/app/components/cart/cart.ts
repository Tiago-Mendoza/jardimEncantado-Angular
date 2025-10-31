import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CartService } from '../../services/cart.service';
import { CartItem } from '../../models/cart-item.model';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './cart.html',
  styleUrls: ['./cart.css']
})
export class CartComponent implements OnInit {
  cartItems: CartItem[] = [];
  paymentMethod: string = 'credito';
  customerName: string = '';
  customerEmail: string = '';

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.loadCart();
  }

  loadCart(): void {
    this.cartItems = this.cartService.getCartItems();
  }

  removeItem(index: number): void {
    this.cartService.removeFromCart(index);
    this.loadCart();
  }

  getTotalPrice(): number {
    return this.cartService.getTotalPrice();
  }

  formatCurrency(value: number): string {
    return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  }

  onSubmit(): void {
    if (this.cartItems.length === 0) {
      alert('Seu carrinho está vazio!');
      return;
    }
    alert('Compra concluída! (Fluxo de pagamento simulado)');
    this.cartService.clearCart();
    this.loadCart();
    this.paymentMethod = 'credito';
    this.customerName = '';
    this.customerEmail = '';
  }
}
