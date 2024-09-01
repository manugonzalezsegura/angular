import { Component, OnInit } from '@angular/core';
import { FakeStoreService } from '../../services/fake-store.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  products: any[] = [];

  constructor(private fakeStoreService: FakeStoreService) {}

  ngOnInit() {
    this.loadProducts();
  }

  async loadProducts() {
    this.products = await this.fakeStoreService.getAllProducts();
  }
}
