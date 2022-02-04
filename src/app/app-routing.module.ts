import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forRoot(
      [


        {
          path: "",
          // canActivate: [HomeGuard],
          loadChildren: () => import("./pages/home/home.module").then(m => m.HomeModule)
        },

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
