# FIREBASE AUTHENTICATION PROJECT

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
