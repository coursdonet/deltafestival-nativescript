import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { ReglagesgestionequipeComponent } from "./reglagesgestionequipe.component";

const routes: Routes = [
    { path: "", component: ReglagesgestionequipeComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class ReglagesgestionequipeRoutingModule { }
