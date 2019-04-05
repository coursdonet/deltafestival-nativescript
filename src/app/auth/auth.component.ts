import { Component, OnInit, NgZone } from "@angular/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";
import { UsersService } from "../api/services";
import { User } from "../api/models";
import * as ApplicationSettings from "application-settings";
import { RouterExtensions } from "nativescript-angular/router";
import { Page } from "ui/page";

@Component({
    selector: "Auth",
    moduleId: module.id,
    templateUrl: "./auth.component.html",
    styleUrls: ["./auth.component.scss"]
})

export class AuthComponent implements OnInit {

    isLoggingIn = true;
    userName: string;
    ticketCode: string;
    user: User;
    input: any;
    
    constructor(private userService: UsersService, private router: RouterExtensions, page: Page) {
        this.input = {
            userName: "",
            ticketCode: ""
        };
        page.actionBarHidden = true;
    }

    toggleForm() {
        this.isLoggingIn = !this.isLoggingIn;
      }

    login() {
        if (this.isLoggingIn) {
            this.ticketCode = this.input.ticketCode;
            this.userService.Login(this.ticketCode).subscribe((loggedUser) => {
                this.user = loggedUser;
                ApplicationSettings.setNumber("userId", loggedUser.id);
                this.router.navigate(["/home"], { clearHistory: true });
            });
            console.log("connecté");
        } else {
            // Perform the registration
            this.userService.PostUser(this.input).subscribe((loggedUser) => {
                this.user = loggedUser;
                ApplicationSettings.setNumber("userId", loggedUser.id);
                this.router.navigate(["/home"], { clearHistory: true });
            });
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
