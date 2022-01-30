import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DashboardIngresosComponent } from './pages/dashboard-ingresos/dashboard-ingresos.component';
import { MenuComponent } from './pages/menu/menu.component';

@NgModule({
  imports: [
    RouterModule.forRoot(
      [
        { path: "", component: MenuComponent },
        { path: "DashboardIngresos", component: DashboardIngresosComponent },

        // {
        //     path: "",
        //     canActivate: [HomeGuard],
        //     loadChildren: () => import("./pages/home/app-main.module").then(m => m.AppMainModule)
        // },

        // { path: "error", component: AppErrorComponent },
        // { path: "notfound", component: AppNotfoundComponent },
        // { path: "auth/login", component: AppLoginComponent },
        // // {
        //     path: "auth/register",
        //     loadChildren: () => import("./auth/register/register.module").then(m => m.RegisterModule)
        // },
        { path: "**", redirectTo: "/notfound" },
      ],
      { scrollPositionRestoration: "enabled" }
    ),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
