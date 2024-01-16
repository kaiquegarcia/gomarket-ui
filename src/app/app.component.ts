import { Component, Inject, OnInit } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { ProductListItemResponse } from 'src/responses/product-list-item.response';
import { BackendService } from 'src/services/backend.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  loaded: boolean = false;
  productsList: ProductListItemResponse[] = [];

  constructor(
    @Inject(BackendService) private readonly backend: BackendService,
  ) {}

  ngOnInit(): void {
    Promise.all([
      this.loadProductsList(1),
    ]).finally(() => this.loaded = true);
  }

  async loadProductsList(page: number) {
    this.productsList = await firstValueFrom(this.backend.listProducts(page));
  }

  // TODO: createProduct
  // TODO: updateProduct
  // TODO: deleteProduct
}
