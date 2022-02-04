// https://levelup.gitconnected.com/a-complete-guide-to-angular-modules-faf5a85e3e60

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardDataComponent } from './atoms/card/card-data/card-data.component';
import { CardEvolutionComponent } from './atoms/card/card-evolution/card-evolution.component';
import { CardGraphComponent } from './atoms/card/card-graph/card-graph.component';
import { CardIconComponent } from './atoms/card/card-icon/card-icon.component';
import { CardNameComponent } from './atoms/card/card-name/card-name.component';
import { CardSimpleComponent } from './components-organisms/cards/card-simple/card-simple.component';
import { CardComponent } from './molecules/card/card.component';
import { DashboardIngresosComponent } from './pages/home/dashboard-ingresos-page/dashboard-ingresos.component';

@NgModule({
  declarations: [AppComponent, DashboardIngresosComponent, CardSimpleComponent, CardComponent, CardNameComponent, CardDataComponent, CardEvolutionComponent, CardGraphComponent, CardIconComponent],
  imports: [BrowserModule, BrowserAnimationsModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
