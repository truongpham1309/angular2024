import { Routes } from '@angular/router';
import { ProductsComponent } from './components/products/products.component';
import { HomePageComponent } from './components/home-page/home-page.component';

export const routes: Routes = [
    {
        path: '',
        component: HomePageComponent

    },
    {
        path: "products",
        component: ProductsComponent
    }
];
