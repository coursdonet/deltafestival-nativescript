import { NgModule, NgModuleFactoryLoader, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ConnexionComponent } from "./login/connexion.component";
import { InscriptionComponent } from "./inscription/inscription.component";
import { GestiondesequipesComponent } from "./gestiondesequipes/gestiondesequipes.component";
import { ReglagesgestionequipeComponent } from "./reglagesgestionequipe/reglagesgestionequipe.component";
import { MatchequipeComponent } from "./matchequipe/matchequipe.component";

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        ConnexionComponent,
        InscriptionComponent,
        GestiondesequipesComponent,
        ReglagesgestionequipeComponent,
        MatchequipeComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AppModule { }
