import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'', component:HomeComponent},
  //Creating the lazy loading for login 
  {path:'users',
    loadChildren:() => import('./login/login.module')
    .then(mod => mod.LoginModule)
  },
  {path:'contact',
    loadChildren:() => import('./contact/contact.module')
    .then(mod => mod.ContactModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
