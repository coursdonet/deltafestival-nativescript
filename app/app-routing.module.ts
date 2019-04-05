import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { ConnexionComponent } from './login/connexion.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { GestiondesequipesComponent } from './gestiondesequipes/gestiondesequipes.component';
import { ReglagesgestionequipeComponent } from "./reglagesgestionequipe/reglagesgestionequipe.component";
import { MatchequipeComponent } from "./matchequipe/matchequipe.component";

const routes: Routes = [
    { path: "", redirectTo: "/home", pathMatch: "full" },
    { path: "home", loadChildren: "./home/home.module#HomeModule" },
    { path: "connexion", component: ConnexionComponent },
    { path: "inscription", component: InscriptionComponent },
    { path: "gestiondesequipes", component: GestiondesequipesComponent },
    { path: "reglagesgestionequipe", component: ReglagesgestionequipeComponent },
    { path: "matchequipe", component: MatchequipeComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
