import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AppHeader } from './components/header/app.header';
import { FooterComponent } from './components/footer/footer.component';
import { LeftNavComponent } from './components/left-nav/left-nav.component';
import { DashboardMainComponent } from './components/dashboard-main/dashboard-main.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { SignupComponent } from './components/signup/signup.component';
import { DropdownComponent } from './components/common/dropdown/dropdown.component';
import { TextBoxComponent } from './components/common/TextBox/textbox.component';
import { PhoneFormatter } from './pipes/phoneformatter';
import { LookupService } from './services/lookup.service';
import { UserService } from './services/user.service';
import { ApiService } from './services/api.service';
import { LoginComponent } from './components/login/login.component';
import { ProductsComponent } from './components/products/products.component';


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
    SignupComponent,
    DropdownComponent,
    TextBoxComponent,
    PhoneFormatter,
    LoginComponent,
    ProductsComponent
  ],

  //other modules should be referenced in imports
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path: 'login', component:
          LoginComponent
      },
      {
        path: 'register', component:
          SignupComponent
      },
      {
        path:'products',
        component:ProductsComponent
      }
    ])
  ],
  //Services should be referenced in providers
  providers: [LookupService, UserService, ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
