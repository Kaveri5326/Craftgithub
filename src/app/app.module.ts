import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { ArtsComponent } from './arts/arts.component';
import { ModalComponent } from './modal/modal.component';
import { PartyComponent } from './party/party.component';
import { SationaryComponent } from './sationary/sationary.component';
import { MaskandsanitizerComponent } from './maskandsanitizer/maskandsanitizer.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { CartComponent } from './cart/cart.component';
import { PracticePipe } from './practice.pipe';
import {HttpClientModule} from '@angular/common/http';
import { ComponentsComponent } from './components/components.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutusComponent,
    ContactusComponent,
    ArtsComponent,
    ModalComponent,
    PartyComponent,
    SationaryComponent,
    MaskandsanitizerComponent,
    LoginComponent,
    SignupComponent,
    CartComponent,
    PracticePipe,
    ComponentsComponent,
    FooterComponent,
    NavbarComponent,
    HeaderComponent,
    ShoppingCartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
