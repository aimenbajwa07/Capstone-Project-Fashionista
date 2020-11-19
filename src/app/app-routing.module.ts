
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';

import { AuthGuard } from './auth/auth.guard';
import { ServicesComponent } from './services/services.component';
import { CompaniesListComponent } from './companies-list/companies-list.component';
import { BrandsListComponent } from './brands-list/brands-list.component';
import { ItemListComponent } from './item-list/item-list.component';
import { BrandAddComponent } from './brand-add/brand-add.component';
import { BrandDetailComponent } from './brand-detail/brand-detail.component';
import { BrandEditComponent } from './brand-edit/brand-edit.component';
import { ItemAddComponent } from './item-add/item-add.component';
import { ItemDetailComponent } from './item-detail/item-detail.component';
import { ItemEditComponent } from './item-edit/item-edit.component';
import { ItemsComponent } from './items/items.component';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'profile', component: ProfileComponent,  canActivate: [AuthGuard] },
  {path: 'services', component: ServicesComponent,  canActivate: [AuthGuard] },
  {path: 'companies-list', component: CompaniesListComponent,  canActivate: [AuthGuard] },
  {path: 'brands-list', component: BrandsListComponent,  canActivate: [AuthGuard] },
  {path: 'brand-add', component: BrandAddComponent,  canActivate: [AuthGuard] },
  {path: 'brand-detail/:id', component: BrandDetailComponent,  canActivate: [AuthGuard] },
  {path: 'brand-edit/:id', component: BrandEditComponent,  canActivate: [AuthGuard] },
  {path: 'items-list', component: ItemListComponent,  canActivate: [AuthGuard] },
  {path: 'item-add', component: ItemAddComponent,  canActivate: [AuthGuard] },
  {path: 'item-detail/:id', component: ItemDetailComponent,  canActivate: [AuthGuard] },
  {path: 'item-edit/:id', component: ItemEditComponent,  canActivate: [AuthGuard] },
  {path: 'items', component:ItemsComponent, canActivate: [AuthGuard]},
  {path: 'cart', component:CartComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
