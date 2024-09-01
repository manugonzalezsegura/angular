import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';
//import { LoginComponent } from 'src/app/components/login-component/login/login.component';
import { HomePageRoutingModule } from './home-routing.module';
//import {ButtonBarComponent} from '../../components/button-bar/button-bar.component'
import { SharedModule } from '../../shared/shared.module'



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    SharedModule

  ],
  declarations: [HomePage]
})
export class HomePageModule {}
