import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { BookComponent } from './components/book/book.component';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule} from '@angular/material/icon';
import { BookCardComponent } from './components/bookCard/bookCard.component';
import { ShoppingCartComponent } from './components/shoppingCart/shoppingCart.component';
import { CartDetailsComponent } from './components/cartDetails/cartDetails.component';
import { PaymentComponent } from './components/payment/payment.component';
@NgModule({
  declarations: [
    AppComponent,
      DashboardComponent,
      BookComponent,
      NavbarComponent,
      BookCardComponent,
      ShoppingCartComponent,
      CartDetailsComponent,
      PaymentComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
