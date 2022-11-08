# FIREBASE AUTHENTICATION PROJECT

<img src="https://github.com/Yelose/Yelose/blob/main/img/login.gif?raw=true" width="100%">

## Clone your repository into the folder you want the project to be.

### This example is made with Visual Studio Code

```
  git clone https://github.com/YourName/your-project.git
  ng new your-project --directory=./
  cd your-project
  code .
```

## Add Angular Material for simple but powerfull design

### Installation

```
  ng add @angular/material
```

### Having a folder to collect all the material imports

```
  ng new module modules/material
```

Import the material you will use in an array

```
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

const MaterialComponents = [
  MatButtonModule,
  MatIconModule,
  MatToolbarModule,
  MatFormFieldModule,
  MatInputModule,
];

@NgModule({
  imports: [MaterialComponents],
  exports: [MaterialComponents],
})
export class MaterialModule {}
```

Export it to main module `app.module.ts`

```
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
```

## Set up your firebase

### Create a firebase account with your google email, then go to your terminal and add

The first line will redirect you so you can fill your email and password and go back to your console

```
  firebase login
  ng install firebase@angular/fire
```

## Create your components

```
  ng generate component pages/home
  ng generate component pages/auth/login
  ng generate component pages/auth/signup
  ng generate component components/header
```

## Add the apropiated routes in `app-routing.module.ts`

```
const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
];
```

## Navigation Bar

On your header component add a mat toolbar, you can pick primary, accent or warn color.

```
<mat-toolbar color="accent">
  Authentication Example
  <button mat-button routerLink="login">
    Log in
    <mat-icon>login</mat-icon>
  </button>
</mat-toolbar>
```

With some styles to move the login to the right

```
  mat-toolbar {
    display: flex;
    justify-content: space-between;
  }
```

## Add the navbar to the app `app.component.html`

```
<body>
  <header>
    <app-header></app-header>
  </header>
  <main>
    <router-outlet></router-outlet>
  </main>
</body>
```

Lets style it so the navbar stays on top

```
body {
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: aliceblue;
  main {
    display: flex;
    flex-direction: column;
    flex: 1;
    overflow-y: auto;
  }
}
```

I give it a background to test its working

## Log in form

import `FormsModule` into `app.module.ts`

```
import { ReactiveFormsModule } from '@angular/forms';
```

go to your `login.component.ts` and add right over the constructor, the form controlls

```
import { FormControl, FormGroup } from '@angular/forms';
```

```
  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });
```

# FirebaseAuthentication

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.0.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
