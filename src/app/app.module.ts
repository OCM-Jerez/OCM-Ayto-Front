// https://levelup.gitconnected.com/a-complete-guide-to-angular-modules-faf5a85e3e60

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardDataComponent } from './atoms/card/card-data/card-data.component';
import { CardEvolutionComponent } from './atoms/card/card-evolution/card-evolution.component';
import { CardGraphComponent } from './atoms/card/card-graph/card-graph.component';
import { CardNameComponent } from './atoms/card/card-name/card-name.component';
import { CardSimpleComponent } from './components-organisms/cards/card-simple/card-simple.component';
import { CardComponent } from './molecules/card/card.component';
import { DashboardIngresosComponent } from './pages/dashboard-ingresos/dashboard-ingresos.component';
import { MenuComponent } from './pages/menu/menu.component';
import { CardIconComponent } from './atoms/card/card-icon/card-icon.component';


@NgModule({
  declarations: [AppComponent, DashboardIngresosComponent, MenuComponent, CardSimpleComponent, CardComponent, CardNameComponent, CardDataComponent, CardEvolutionComponent, CardGraphComponent, CardIconComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
