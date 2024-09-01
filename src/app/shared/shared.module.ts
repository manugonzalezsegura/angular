import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ButtonBarComponent } from '../components/button-bar/button-bar.component';
import { LoginComponent } from '../components/login-component/login/login.component';

@NgModule({
  declarations: [ButtonBarComponent, LoginComponent],
  imports: [CommonModule, IonicModule],
  exports: [ButtonBarComponent, LoginComponent]
})
export class SharedModule {}