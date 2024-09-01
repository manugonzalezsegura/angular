import { Component, OnInit } from '@angular/core';
import {NavController} from '@ionic/angular';

import confetti from 'canvas-confetti';

@Component({
  selector: 'app-button-bar',
  templateUrl: './button-bar.component.html',
  styleUrls: ['./button-bar.component.scss'],
})
export class ButtonBarComponent  implements OnInit {
  showLogin = false; 
  constructor(private navCtrl: NavController) { }

  ngOnInit() {}
  toggleLogin() {
    // çocultar el login
    this.showLogin = !this.showLogin;
  }

  closeLogin() {
    this.showLogin = false;
  }

  goToProfile() {
    this.navCtrl.navigateForward('/perfil');
  }

  goToHome() {
    this.navCtrl.navigateForward('/home');
  }

  launchConfetti() {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });
  }

}
