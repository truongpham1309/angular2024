import { Routes } from '@angular/router';
import { ProductsComponent } from './components/client/products/products.component';
import { HomePageComponent } from './components/client/home-page/home-page.component';
import { NotFoundPageComponent } from './components/client/not-found-page/not-found-page.component';
import { LoginPageComponent } from './components/client/login-page/login-page.component';
import { ProductsDetailPageComponent } from './components/client/products-detail-page/products-detail-page.component';

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
