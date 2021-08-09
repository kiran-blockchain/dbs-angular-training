import { NgModule } from "@angular/core";
import { RouterModule } from '@angular/router';
import { LoginComponent } from "../components/login/login.component";
import { ProductsComponent } from "../components/products/products.component";
import { SignupComponent } from "../components/signup/signup.component";

@NgModule({
    declarations: [],
    imports: [
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
                path: 'products',
                component: ProductsComponent
            }
        ])
    ],
    providers: [],
    bootstrap: [],
    exports:[RouterModule]
})

export class DBSRouterModule {

}