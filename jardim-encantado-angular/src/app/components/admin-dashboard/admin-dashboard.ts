import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductsService } from '../../services/products.service';
import { AuthService } from '../../services/auth.service';
import { Product, CustomProducts } from '../../models/product.model';

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './admin-dashboard.html',
  styleUrls: ['./admin-dashboard.css']
})
export class AdminDashboardComponent implements OnInit {
  category: string = 'buques';
  title: string = '';
  image: string = '';
  oldPrice: number = 0;
  price: number = 0;
  customProducts: CustomProducts = {};

  constructor(
    private productsService: ProductsService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (!this.authService.isAdminLoggedIn()) {
      this.router.navigate(['/admin-login']);
      return;
    }
    this.loadProducts();
  }

  loadProducts(): void {
    this.customProducts = this.productsService.getCustomProducts();
  }

  onSubmit(): void {
    const product: Product = {
      title: this.title,
      image: this.image,
      oldPrice: this.oldPrice,
      price: this.price,
      bestSeller: false
    };
    this.productsService.addProduct(this.category, product);
    this.title = '';
    this.image = '';
    this.oldPrice = 0;
    this.price = 0;
    this.loadProducts();
  }

  deleteProduct(category: string, index: number): void {
    if (confirm('Remover este produto?')) {
      this.productsService.deleteProduct(category, index);
      this.loadProducts();
    }
  }

  logout(): void {
    this.authService.logout();
  }

  getProductsByCategory(category: string): Product[] {
    return (this.customProducts[category as keyof CustomProducts] || []).filter(p => !p.__deleted);
  }
}
