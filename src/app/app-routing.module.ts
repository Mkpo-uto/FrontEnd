import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeesComponentComponent } from './employees-component/employees-component.component';
import { ErrorComponentComponent } from './error-component/error-component.component';
import { LoginComponentComponent } from './login-component/login-component.component';
import { WelcomeComponentComponent } from './welcome-component/welcome-component.component';

const routes: Routes = [
  { path: 'login', component: LoginComponentComponent},
  { path: 'welcome/:Id', component: WelcomeComponentComponent},
  { path: 'employees', component: EmployeesComponentComponent},
  { path: '**', component: ErrorComponentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
