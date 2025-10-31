import { Injectable } from '@angular/core';
import { Product, CustomProducts } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  
  private buqueTitles = [
    'Aurora Rosé', 'Jardim da Manhã', 'Encanto do Campo', 'Doce Primavera',
    'Brisa de Lavanda', 'Amor Perene', 'Luar de Jasmim', 'Sol de Outono',
    'Céu de Hortênsias', 'Rubor de Peônia', 'Alvorada Tropical', 'Romance Provençal',
    'Citrus & Mel', 'Serenata Vermelha', 'Névoa de Eucalipto', 'Orquídea Real',
    'Tons da Terra', 'Caramelo & Creme', 'Noite Estrelada', 'Clássico Elegante'
  ];

  private arranjoTitles = [
    'Centro de Mesa Botânico', 'Elegância de Sala', 'Verde & Dourado', 'Clássico de Vidro',
    'Minimalista Nórdico', 'Campo em Casa', 'Primavera na Mesa', 'Luxo Tropical',
    'Paz & Neve', 'Romance na Varanda', 'Brilho de Suculentas', 'Doce Provença',
    'Outono Sofisticado', 'Brisa Marinha', 'Urban Jungle', 'Lavanda & Linho',
    'Raízes da Serra', 'Pôr do Sol', 'Jardim Suspenso', 'Natal Atemporal'
  ];

  private presenteTitles = [
    'Kit Bem-Estar', 'Delícias de Chocolate', 'Café da Manhã Feliz', 'Combo Spa em Casa',
    'Vela Aromática Premium', 'Cesta Doçura', 'Chá & Carinho', 'Vinho & Flores',
    'Mimo Romântico', 'Box Surpresa', 'Doces Artesanais', 'Aromas da Serra',
    'Bem-vinda, Bebê', 'Parabéns Gourmet', 'Self-care Deluxe', 'Carinho em Caixa',
    'Afeto de Domingo', 'Sabor & Afeto', 'Kit Relax', 'Tudo de Bom'
  ];

  constructor() { }

  private buildCatalog(baseName: string, folderName: string, filePrefix: string, total: number = 20, customTitles: string[] = []): Product[] {
    const items: Product[] = [];
    for (let i = 1; i <= total; i++) {
      const oldPrice = 50 + i * 3;
      const discounted = i % 3 !== 0;
      const price = discounted ? +(oldPrice * (0.6 + (i % 5) * 0.05)).toFixed(2) : oldPrice;
      const padded = i.toString().padStart(2, '0');
      const title = customTitles[i - 1] && customTitles[i - 1].trim() ? customTitles[i - 1].trim() : `${baseName} ${padded}`;
      items.push({
        title: title,
        image: `assets/img/${folderName}/${filePrefix}-${padded}.jpg`,
        oldPrice: oldPrice,
        price: discounted ? price : oldPrice,
        bestSeller: i <= 6 && i % 2 === 1
      });
    }
    return items;
  }

  private loadCustomCatalogs(): CustomProducts {
    try {
      return JSON.parse(localStorage.getItem('customProducts') || '{}');
    } catch (_) {
      return {};
    }
  }

  private mergeCatalog(original: Product[], customList: Product[] = []): Product[] {
    if (!Array.isArray(customList)) return original;
    const activeCustom = customList.filter(p => !p.__deleted);
    return [...original, ...activeCustom];
  }

  getBuques(): Product[] {
    const buques = this.buildCatalog('Buquê', 'buques', 'buque', 20, this.buqueTitles);
    const custom = this.loadCustomCatalogs();
    return this.mergeCatalog(buques, custom.buques);
  }

  getArranjos(): Product[] {
    const arranjos = this.buildCatalog('Arranjo', 'arranjos', 'arranjo', 20, this.arranjoTitles);
    const custom = this.loadCustomCatalogs();
    return this.mergeCatalog(arranjos, custom.arranjos);
  }

  getPresentes(): Product[] {
    const presentes = this.buildCatalog('Presente', 'presentes', 'presente', 20, this.presenteTitles);
    const custom = this.loadCustomCatalogs();
    return this.mergeCatalog(presentes, custom.presentes);
  }

  getBestSellersBuques(): Product[] {
    return this.getBuques().filter(p => p.bestSeller).slice(0, 6);
  }

  getBestSellersArranjos(): Product[] {
    return this.getArranjos().filter(p => p.bestSeller).slice(0, 6);
  }

  getBestSellersPresentes(): Product[] {
    return this.getPresentes().filter(p => p.bestSeller).slice(0, 6);
  }

  // Admin functions
  addProduct(category: string, product: Product): void {
    const custom = this.loadCustomCatalogs();
    if (!custom[category as keyof CustomProducts]) {
      custom[category as keyof CustomProducts] = [];
    }
    custom[category as keyof CustomProducts]?.push(product);
    localStorage.setItem('customProducts', JSON.stringify(custom));
  }

  deleteProduct(category: string, index: number): void {
    const custom = this.loadCustomCatalogs();
    const list = custom[category as keyof CustomProducts];
    if (list && list[index]) {
      list[index].__deleted = true;
      localStorage.setItem('customProducts', JSON.stringify(custom));
    }
  }

  getCustomProducts(): CustomProducts {
    return this.loadCustomCatalogs();
  }
}

