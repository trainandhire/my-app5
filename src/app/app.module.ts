import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { HomeComponent } from './home/home.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DirectivesComponent } from './directives/directives.component';
import { CartComponent } from './cart/cart.component';
import { PhoneComponent } from './phone/phone.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import {HttpClientModule} from '@angular/common/http';
import { CreateVehicleComponent } from './create-vehicle/create-vehicle.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { VehicleDetailsComponent } from './vehicle-details/vehicle-details.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { CounterComponent } from './counter/counter.component';
import { DisplayComponent } from './display/display.component';
import { ItemsComponent } from './items/items.component';
import { NavComponent } from './nav/nav.component';
import { CartlistComponent } from './cartlist/cartlist.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    PagenotfoundComponent,
    HomeComponent,
    CalculatorComponent,
    DataBindingComponent,
    DirectivesComponent,
    CartComponent,
    PhoneComponent,
    VehicleComponent,
    CreateVehicleComponent,
    CreateUserComponent,
    VehicleDetailsComponent,
    ParentComponent,
    ChildComponent,
    CounterComponent,
    DisplayComponent,
    ItemsComponent,
    NavComponent,
    CartlistComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  exports:[],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
