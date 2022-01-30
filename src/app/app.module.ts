import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardIngresosComponent } from './pages/dashboard-ingresos/dashboard-ingresos.component';
import { MenuComponent } from './pages/menu/menu.component';
import { CardSimpleComponent } from './components/cards/card-simple/card-simple.component';


@NgModule({
  declarations: [AppComponent, DashboardIngresosComponent, MenuComponent, CardSimpleComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
