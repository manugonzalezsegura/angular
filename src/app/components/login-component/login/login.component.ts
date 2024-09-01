import { Component, OnInit,EventEmitter,Output } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent  implements OnInit {
  @Output() close = new EventEmitter<void>();
  constructor() { }

  ngOnInit() {}

  login() {
    // Lógica para manejar el login
    console.log('Login clicked');
  }
  closeLogin() {
    this.close.emit();
  }

}
