import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home';
import { ArranjosComponent } from './components/arranjos/arranjos';
import { PresentesComponent } from './components/presentes/presentes';
import { CartComponent } from './components/cart/cart';
import { AdminLoginComponent } from './components/admin-login/admin-login';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'arranjos', component: ArranjosComponent },
  { path: 'presentes', component: PresentesComponent },
  { path: 'cart', component: CartComponent },
  { path: 'admin-login', component: AdminLoginComponent },
  { path: 'admin-dashboard', component: AdminDashboardComponent },
  { path: '**', redirectTo: '' }
];
