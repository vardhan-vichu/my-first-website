import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ProductsComponent,
    CheckoutComponent,
    OrderSuccessComponent,
    AboutComponent,
    ContactComponent,
    AdminProductsComponent,
    AdminOrdersComponent,
    FooterComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    AngularFontAwesomeModule,
    RouterModule.forRoot([
      { path: '',   redirectTo: '/heroes', pathMatch: 'full' },
      { path: '', component: AppComponent },
      { path: 'home', component: HomeComponent },
      { path: 'navbar', component: NavbarComponent },
      { path: 'products', component: ProductsComponent },
      { path: 'checkout', component: CheckoutComponent },
      { path: 'order-success', component: OrderSuccessComponent },
      { path: 'about', component: AboutComponent },
      { path: 'contact', component: ContactComponent },
      { path: 'admin/admin-products', component: AdminProductsComponent },
      { path: 'admin/admin-orders', component: AdminOrdersComponent },
      { path: 'footer', component: FooterComponent },
      { path: 'login', component: LoginComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent],

})
export class AppModule { }
