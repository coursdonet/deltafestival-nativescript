import { Component, OnInit, NgZone } from "@angular/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";

@Component({
    selector: "Auth",
    moduleId: module.id,
    templateUrl: "./auth.component.html",
    styleUrls: ["./auth.component.scss"]
})

export class AuthComponent implements OnInit {

    isLoggingIn = true;

    toggleForm() {
        this.isLoggingIn = !this.isLoggingIn;
      }

    submit() {
        if (this.isLoggingIn) {
            console.log("connecté") ;
        } else {
            // Perform the registration
        }
      }

    ngOnInit(): void {
        // Init your component properties here.
    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }
}
