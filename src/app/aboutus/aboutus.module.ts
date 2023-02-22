import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutCeoComponent } from './about-ceo/about-ceo.component';
import { AboutDirectorComponent } from './about-director/about-director.component';
import { AboutAddressComponent } from './about-address/about-address.component';



@NgModule({
  declarations: [
    AboutCeoComponent,
    AboutDirectorComponent,
    AboutAddressComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    AboutCeoComponent
  ]
})
export class AboutusModule { }
