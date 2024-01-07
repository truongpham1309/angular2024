import { Routes } from '@angular/router';
import { ProductsComponent } from './components/products/products.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { ProductsDetailPageComponent } from './components/products-detail-page/products-detail-page.component';

export const routes: Routes = [
    {
        path: "",
        redirectTo: "/home",
        pathMatch: "full",
    },
    {
        path: 'home',
        component: HomePageComponent,

    },
    {
        path: "products",
        component: ProductsComponent,
    },
    {
        path: "login",
        component: LoginPageComponent,
    },
    {
        path: "product_detail/:idPr",
        component: ProductsDetailPageComponent,
    },
    {
        path: "**",
        component: NotFoundPageComponent,
    }
];
