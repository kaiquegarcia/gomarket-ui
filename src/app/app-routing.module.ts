import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// TODO: paths
// - '' (component: ProductsListPage)
// - '/product/:code' (component: ProductDetailsPage)
// - '/create-product' (component: CreateProductPage) ~ requires ProductFormComponent
// - '/update-product/:code' (component: UpdateProductPage) ~ requires ProductFormComponent
const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
