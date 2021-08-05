import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegistrationPageComponent } from './registration-page/registration-page.component';

const routes: Routes = [
  { 
    path:'', component:LoginPageComponent
  },
  {path:"login", component:LoginPageComponent},
  {path:"sign-up",component:RegistrationPageComponent},
  {path:"header", component:HeaderComponent},
  // {path:'auth', loadChildren:()=>import('./auth/auth.module').then((m)=>m.AuthModule)}
];

@NgModule({
  // declarations:[LoginPageComponent, RegistrationPageComponent, HeaderComponent],
  imports: [RouterModule.forRoot(routes)],
  // imports: [CommonModule,RouterModule.forChild(routes)],


  exports: [RouterModule]
})
export class AppRoutingModule { }
