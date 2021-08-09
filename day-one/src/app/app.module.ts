import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
    ProductsComponent
  ],

  //other modules should be referenced in imports
  imports: [
    BrowserModule,
    //FormsModule,
    DBSRouterModule,
    DBSCommonModule,
    UserModule,
    ServiceModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
