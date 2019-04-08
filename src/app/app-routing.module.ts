import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

const routes: Routes = [
    { path: "", redirectTo: "/classement", pathMatch: "full" },
    { path: "home", loadChildren: "~/app/home/home.module#HomeModule" },
    { path: "auth", loadChildren: "~/app/auth/auth.module#AuthModule" },
    { path: "planning", loadChildren: "~/app/planning/planning.module#PlanningModule" },
    { path: "classement", loadChildren: "~/app/ranking/ranking.module#RankingModule" },

];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
