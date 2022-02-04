import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent {
  constructor(private router: Router) { }

  @Input() sidebarIsOpen = false;

  ingresos() {
    this.router.navigate(['/DashboardIngresos']);
  }

  gastos() {
    this.router.navigate(['/DashboardGastos']);
  }

  programas() {
    this.router.navigate(['/programas']);
  }

}
