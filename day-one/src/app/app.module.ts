import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppHeader } from './components/header/app.header';

@NgModule({
  //components
  //directive
  //pipes should be referenced in declarations
  declarations: [
    AppComponent,
    AppHeader
  ],

  //other modules should be referenced in imports
  imports: [
    BrowserModule
  ],
  //Services should be referenced in providers
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
