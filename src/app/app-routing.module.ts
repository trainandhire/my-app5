import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationGuard } from './authentication.guard';
import { CalculatorComponent } from './calculator/calculator.component';
import { CartComponent } from './cart/cart.component';
import { CounterComponent } from './counter/counter.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { CreateVehicleComponent } from './create-vehicle/create-vehicle.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { DirectivesComponent } from './directives/directives.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ParentComponent } from './parent/parent.component';
import { PhoneComponent } from './phone/phone.component';
import { VehicleDetailsComponent } from './vehicle-details/vehicle-details.component';
import { VehicleComponent } from './vehicle/vehicle.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'dashboard', component:DashboardComponent, canActivate:[], children:[
    {path:'home',component:HomeComponent},
    {path:'data-binding',component:DataBindingComponent},
    {path:'calculator',component:CalculatorComponent},
    {path:'directives', component: DirectivesComponent},
    {path:'cart',component:CartComponent},
    {path:'phone',component:PhoneComponent},
    {path:'vehicle', component: VehicleComponent},
    {path:'create-vehicle', component: CreateVehicleComponent},
    {path:'create-user', component: CreateUserComponent},
    {path:'vehicle-details/:id', component: VehicleDetailsComponent},
    {path:'edit-vehicle/:id', component: CreateVehicleComponent},
    {path:'parent', component:ParentComponent},
    {path:'counter', component:CounterComponent}
  ]},
  {path:'',component:LoginComponent},
  {path:'**',component:PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
6