import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { AppHeader } from './components/header/app.header';
import { FooterComponent } from './components/footer/footer.component';
import { LeftNavComponent } from './components/left-nav/left-nav.component';
import { DashboardMainComponent } from './components/dashboard-main/dashboard-main.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { SignupComponent } from './components/signup/signup.component';

@NgModule({
  //components
  //directive
  //pipes should be referenced in declarations
  declarations: [
    AppComponent,
    AppHeader,
    FooterComponent,
    LeftNavComponent,
    DashboardMainComponent,
    ForgotPasswordComponent,
    SignupComponent
  ],

  //other modules should be referenced in imports
  imports: [
    BrowserModule,
    FormsModule
  ],
  //Services should be referenced in providers
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }