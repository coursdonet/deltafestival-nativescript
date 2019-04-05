import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { GestiondesequipesComponent } from "./gestiondesequipes.component";

const routes: Routes = [
    { path: "", component: GestiondesequipesComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class GestiondesequipesRoutingModule { }
