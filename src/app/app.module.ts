// https://levelup.gitconnected.com/a-complete-guide-to-angular-modules-faf5a85e3e60

import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HighchartsChartModule } from 'highcharts-angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './commons/components/card/card.component';
import { CardDataComponent } from './commons/components/card/components/card-data/card-data.component';
import { CardEvolutionComponent } from './commons/components/card/components/card-evolution/card-evolution.component';
import { CardGraphComponent } from './commons/components/card/components/card-graph/card-graph.component';
import { CardIconComponent } from './commons/components/card/components/card-icon/card-icon.component';
import { CardNameComponent } from './commons/components/card/components/card-name/card-name.component';
import { CardSimpleComponent } from './pages/home/dashboard-ingresos-page/components/card-simple/card-simple.component';
import { GraphIngresos1Component } from './pages/home/dashboard-ingresos-page/components/graph-ingresos1/graph-ingresos1.component';
import { DashboardIngresosComponent } from './pages/home/dashboard-ingresos-page/dashboard-ingresos.component';


@NgModule({
  declarations: [AppComponent, DashboardIngresosComponent, CardSimpleComponent, CardComponent, CardNameComponent, CardDataComponent, CardEvolutionComponent, CardGraphComponent, CardIconComponent, GraphIngresos1Component],
  imports: [BrowserModule, BrowserAnimationsModule, AppRoutingModule, HighchartsChartModule, HttpClientModule,],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
