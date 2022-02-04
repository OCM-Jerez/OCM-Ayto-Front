import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { MenuComponent } from './components/menu/menu.component';
import { DashboardGastosModule } from './dashboard-gastos/dashboard-gastos.module';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
// import { DashboardGastosComponent } from './dashboard-gastos/dashboard-gastos.component';


@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    MenuComponent,
    FooterComponent,
    // DashboardGastosComponent,

  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    DashboardGastosModule,
  ]
})
export class HomeModule { }
