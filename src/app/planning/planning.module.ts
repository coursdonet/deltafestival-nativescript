import { NgModule, NO_ERRORS_SCHEMA, Component, NgZone } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { PlanningRoutingModule } from "./planning-routing.module";
import { PlanningComponent } from "./planning.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        PlanningRoutingModule
    ],
    declarations: [
        PlanningComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})

export class PlanningModule {
  
}
