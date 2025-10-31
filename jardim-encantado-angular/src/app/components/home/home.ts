import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsService } from '../../services/products.service';
import { CartService } from '../../services/cart.service';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class HomeComponent implements OnInit {
  bestSellersBuques: Product[] = [];
  allBuques: Product[] = [];

  constructor(
    private productsService: ProductsService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.bestSellersBuques = this.productsService.getBestSellersBuques();
    this.allBuques = this.productsService.getBuques();
  }

  addToCart(product: Product): void {
    this.cartService.addToCart({
      title: product.title,
      image: product.image,
      price: product.price,
      oldPrice: product.oldPrice
    });
    alert('Item adicionado ao carrinho!');
  }

  formatCurrency(value: number): string {
    return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  }

  hasDiscount(product: Product): boolean {
    return !!(product.oldPrice && product.price && product.oldPrice > product.price);
  }

  getDiscountPercent(product: Product): number {
    if (!this.hasDiscount(product)) return 0;
    return Math.round((1 - product.price / product.oldPrice) * 100);
  }
}
