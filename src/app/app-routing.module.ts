import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroPageComponent } from './components/pages/cadastro-page/cadastro-page.component';
import { LoginPageComponent } from './components/pages/login-page/login-page.component';
import { UsersPageComponent } from './components/pages/users-page/users-page.component';

const routes: Routes = [
  {path:"", component: LoginPageComponent},
  {path:"login", component: LoginPageComponent},
  {path:"cadastro", component: CadastroPageComponent},
  {path:"admin", component: UsersPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }