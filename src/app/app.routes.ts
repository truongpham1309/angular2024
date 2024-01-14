import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './components/client/products/products.component';
import { HomePageComponent } from './components/client/home-page/home-page.component';
import { NotFoundPageComponent } from './components/client/not-found-page/not-found-page.component';
import { LoginPageComponent } from './components/client/login-page/login-page.component';
import { ProductsDetailPageComponent } from './components/client/products-detail-page/products-detail-page.component';
import { LayoutsComponent } from './components/layouts/layouts.component';
import { AdminLayoutComponent } from './components/admin/admin-layout/admin-layout.component';
import { AdminHomePageComponent } from './components/admin/admin-home-page/admin-home-page.component';
import { AdminProductsComponent } from './components/admin/admin-products/admin-products.component';
import { ProductsCreateComponent } from './components/admin/products-create/products-create.component';

export const routes: Routes = [

    {
        path: "admin",
        component: AdminLayoutComponent,
        children: [
            {
                path: '',
                redirectTo: "/admin/dashboard",
                pathMatch: "full"
            },
            {
                path: "dashboard",
                component: AdminHomePageComponent,
            },
            {
                path: "products",
                component: AdminProductsComponent,
            },
            {
                path: "products_create",
                component: ProductsCreateComponent,
            }
        ]
    },
    {
        path: "login",
        component: LoginPageComponent,
    },
    {
        path: "",
        component: LayoutsComponent,
        children: [
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
                path: "product_detail/:idPr",
                component: ProductsDetailPageComponent,
            },
            {
                path: "**",
                component: NotFoundPageComponent,
            }
        ]
    },

];


