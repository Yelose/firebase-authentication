import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/auth/dashboard/dashboard.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { RecoverComponent } from './pages/auth/recover/recover.component';
import { SignupComponent } from './pages/auth/signup/signup.component';
import { HomeComponent } from './pages/home/home.component';
import {
  canActivate,
  redirectUnauthorizedTo,
  redirectLoggedInTo,
} from '@angular/fire/auth-guard';

const redirectToLogin = () => redirectUnauthorizedTo(['login']);
const redirectToDashboard = () => redirectLoggedInTo(['dashboard']);

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  {
    path: 'login',
    component: LoginComponent,
    ...canActivate(redirectToDashboard),
  },
  {
    path: 'signup',
    component: SignupComponent,
    ...canActivate(redirectToDashboard),
  },
  { path: 'recover', component: RecoverComponent },
  {
    path: 'dashboard',
    component: DashboardComponent,
    ...canActivate(redirectToLogin),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
