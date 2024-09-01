import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FakeStoreService {

  private baseUrl = 'https://fakestoreapi.com/products';

  constructor() { }

  // Obtener todos los productos
  async getAllProducts() {
    const response = await fetch(this.baseUrl);
    const products = await response.json();
    return products;
  }

  // Obtener un producto por ID
  async getProductById(id: number) {
    const response = await fetch(`${this.baseUrl}/${id}`);
    const product = await response.json();
    return product;
  }
}
