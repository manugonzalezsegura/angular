import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  userName: string = "Nombre de Usuario";
  userEmail: string = "usuario@ejemplo.com";
  salesCount: number = 10;

  constructor(private router: Router) {}

  ngOnInit() {}

  goToUploadProduct() {
    this.router.navigate(['/subir-producto']); // Navega a la página para subir productos
  }

  goToTakePhoto() {
    this.router.navigate(['/tomar-foto']); // Navega a la página para tomar fotos
  }

  goToSales() {
    this.router.navigate(['/mis-ventas']); // Navega a la página para ver las ventas
  }
}


