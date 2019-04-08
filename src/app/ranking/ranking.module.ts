import { NgModule, NO_ERRORS_SCHEMA, Component, NgZone } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { RankingRoutingModule } from "./ranking-routing.module";
import { RankingComponent } from "./ranking.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        RankingRoutingModule
    ],
    declarations: [
        RankingComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})

export class RankingModule {

}
