import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { CustomActionBarComponent } from "./custom-action-bar.component";

@NgModule({
	imports: [
		NativeScriptCommonModule,
		NativeScriptFormsModule
	],
	declarations: [
		CustomActionBarComponent
	],
	exports: [
		CustomActionBarComponent
	],
	schemas: [
		NO_ERRORS_SCHEMA
	]
})
export class CustomActionBarModule { }