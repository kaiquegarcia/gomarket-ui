import { Inject, Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { CreateProductDTO } from "src/dtos/create-product.dto";
import { UpdateProductDTO } from "src/dtos/update-product.dto";
import { Observable } from "rxjs";
import { MessageResponse } from "src/responses/message.response";
import { ProductDetailsResponse } from "src/responses/product-details.response";
import { ProductListItemResponse } from "src/responses/product-list-item.response";

@Injectable({
    providedIn: 'root',
})
export class BackendService {
    constructor(
        private readonly client: HttpClient,
        @Inject("BASE_URL") private readonly baseURL: string,
    ) {}

    listProducts(page: number): Observable<ProductListItemResponse[]> {
        return this.client.get<ProductListItemResponse[]>(`${this.baseURL}/products?page=${page}`);
    }

    getProductDetails(code: number): Observable<ProductDetailsResponse> {
        return this.client.get<ProductDetailsResponse>(`${this.baseURL}/products/${code}`);
    }

    createProduct(dto: CreateProductDTO): Observable<MessageResponse> {
        return this.client.post<MessageResponse>(`${this.baseURL}/products`, dto.toRequestBody());
    }

    updateProduct(dto: UpdateProductDTO): Observable<MessageResponse> {
        return this.client.put<MessageResponse>(`${this.baseURL}/products/${dto.code}`, dto.toRequestBody());
    }

    deleteProduct(code: number): Observable<MessageResponse> {
        return this.client.delete<MessageResponse>(`${this.baseURL}/products/${code}`)
    }
}