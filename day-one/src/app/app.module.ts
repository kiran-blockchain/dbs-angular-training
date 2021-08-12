import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { AppHeader } from './components/header/app.header';
import { FooterComponent } from './components/footer/footer.component';
import { LeftNavComponent } from './components/left-nav/left-nav.component';
import { DashboardMainComponent } from './components/dashboard-main/dashboard-main.component';
import { ProductsComponent } from './components/products/products.component';
import { DBSRouterModule } from './rotuer/router.module';
import { ServiceModule } from './services/service.module';
import { UserModule } from './user/user.module';
import { DBSCommonModule } from './common/common.module';
import { AccountComponent } from './account/account.component';
import { PhonePipe } from './pipes/phone.pipe';
import { UnittestComponent } from './unittest/unittest.component';
import { ColorDirective } from './color.directive';


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
    ProductsComponent,
    AccountComponent,
    PhonePipe,
    UnittestComponent,
    ColorDirective
  ],

  //other modules should be referenced in imports
  imports: [
    BrowserModule,
    //FormsModule,
    DBSRouterModule,
    DBSCommonModule,
    UserModule,
    ReactiveFormsModule,
    ServiceModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
