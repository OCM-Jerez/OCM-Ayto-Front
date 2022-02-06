import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardIngresosComponent } from './dashboard-ingresos-page/dashboard-ingresos.component';
import { HomeComponent } from './home.component';

export const routes: Routes = [
    {
        path: "",
        component: HomeComponent,
        children: [
            {
                path: "dashboardIngresos",
                component: DashboardIngresosComponent
            },
            {
                path: "dashboardGastos",
                loadChildren: () => import('./dashboard-gastos-page/dashboard-gastos.module').then(m => m.DashboardGastosModule)
            },
            {
                path: "programas",
                loadChildren: () => import('./programas-page/programas.module').then(m => m.ProgramasModule)
            },
            {
                path: "economicosGastos",
                loadChildren: () => import('./economicos-gastos-page/economicos-gastos.module').then(m => m.EconomicosGastosModule)
            },
            {
                path: "",
                redirectTo: 'dashboardIngresos'
            }
        ]
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})

export class HomeRoutingModule { }
