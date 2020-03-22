# Application Brewery Explorer

## generating modules

`ng g m brewery --routing=true`

## generating components

`ng g c brewery-search -m=brewery`

## generating services

`ng g s brewery`

## linters

For linting we use tslint together with prettier

## pre-commit checks

Pre-commit checks run after staging our changes and running git commit and before a commit is completed.

If the checks fail then the commit is not made and an error shown, while if all checks pass the commit is made as normal.

## Core module

This module is imported only from the main module, as it contains singleton services that any element in the application can use. We do not want to import it in each module, as this will create additional instances.

## state management NGRX

NGRX is a group of libraries “inspired” by the Redux pattern which in turn is “inspired” by the Flux pattern. Being a little more concise, this means that redux pattern is a simplified version of the Flux pattern and NGRX is an angular/rxjs version of the redux pattern.

Motivation: Single source of truth

## generate store

`ng generate store AppState --root --module app.module.ts`

## use schematics

`ng config cli.defaultCollection @ngrx/schematics`

## routing strategy

lazy loading
https://angular.io/guide/lazy-loading-ngmodules

# Angular - auto generated Docs

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.0.7.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
