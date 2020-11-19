import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import {HeaderComponent} from './header/header.component';
import {HomeComponent} from './home/home.component';
import { ProfileComponent } from './profile/profile.component';

import { AuthModule } from './auth/auth.module';
import { ServicesComponent } from './services/services.component';
import { CompaniesListComponent } from './companies-list/companies-list.component';
import { BrandsListComponent } from './brands-list/brands-list.component';
import { ItemListComponent } from './item-list/item-list.component';

import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { BrandAddComponent } from './brand-add/brand-add.component';
import { BrandDetailComponent } from './brand-detail/brand-detail.component';
import { BrandEditComponent } from './brand-edit/brand-edit.component';
import { ItemAddComponent } from './item-add/item-add.component';
import { ItemDetailComponent } from './item-detail/item-detail.component';
import { ItemEditComponent } from './item-edit/item-edit.component';
import { ItemsComponent } from './items/items.component';
import { CartComponent } from './cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ProfileComponent,
    ServicesComponent,
    CompaniesListComponent,
    BrandsListComponent,
    ItemListComponent,
    BrandAddComponent,
    BrandDetailComponent,
    BrandEditComponent,
    ItemAddComponent,
    ItemDetailComponent,
    ItemEditComponent,
    ItemsComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
