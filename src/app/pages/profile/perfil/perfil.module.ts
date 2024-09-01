import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from '../../../components/login-component/login/login.component'
import { IonicModule } from '@ionic/angular';
import {ButtonBarComponent} from '../../../components/button-bar/button-bar.component'
import { PerfilPageRoutingModule } from './perfil-routing.module';
import { PerfilPage } from './perfil.page';
import { SharedModule } from '../../../shared/shared.module'



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PerfilPageRoutingModule,
    SharedModule
  ],
  declarations: [PerfilPage]
})
export class PerfilPageModule {}
