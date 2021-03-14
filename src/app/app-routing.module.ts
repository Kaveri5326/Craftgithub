import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ArtsComponent } from './arts/arts.component';
import { ContactusComponent } from './contactus/contactus.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MaskandsanitizerComponent } from './maskandsanitizer/maskandsanitizer.component';
import { ModalComponent } from './modal/modal.component';
import { PartyComponent } from './party/party.component';
import { SationaryComponent } from './sationary/sationary.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {path:"home",component:HomeComponent},
  {path:"contactus",component:ContactusComponent},
  {path:"aboutus",component:AboutusComponent},
  {path:"arts",component:ArtsComponent},
  {path:"modal",component:ModalComponent},
  {path:"login",component:LoginComponent},
  {path:"signup",component:SignupComponent},
  {path:"party",component:PartyComponent},
  {path:"sationary",component:SationaryComponent},
  {path:"maskandsanitizer",component:MaskandsanitizerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
