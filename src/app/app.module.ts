import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardIngresosComponent } from './pages/dashboard-ingresos/dashboard-ingresos.component';
import { MenuComponent } from './pages/menu/menu.component';


@NgModule({
  declarations: [AppComponent, DashboardIngresosComponent, MenuComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
