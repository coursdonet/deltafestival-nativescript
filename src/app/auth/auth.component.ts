import { Component, OnInit, NgZone } from "@angular/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";
import { UsersService } from "../api/services";
import { User } from "../api/models";
import * as ApplicationSettings from "application-settings";
import { RouterExtensions } from "nativescript-angular/router";
import { alert } from "tns-core-modules/ui/dialogs";
import { Label } from "tns-core-modules/ui/label";
import { getViewById } from "tns-core-modules/ui/page/page";

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
    
    constructor(private userService: UsersService, private router: RouterExtensions) {
        this.input = {
            userName: "",
            ticketCode: ""
        };
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
                const sideDrawer = <RadSideDrawer>app.getRootView();
                const labelTicket = <Label>getViewById(sideDrawer, "userName");
                const labelCode = <Label>getViewById(sideDrawer, "ticketCode");
                sideDrawer.gesturesEnabled = true;
                labelTicket.text = loggedUser.userName;
                labelCode.text = "N° de ticket : " + loggedUser.ticketCode;
                this.router.navigate(["/home"], { clearHistory: true });
            }, (error) => alert({
                title: "Erreur",
                message: error.error,
                okButtonText: "OK"
            }));
        } else {
            // Perform the registration
            this.userService.PostUser(this.input).subscribe((loggedUser) => {
                this.user = loggedUser;
                ApplicationSettings.setNumber("userId", loggedUser.id);
                this.router.navigate(["/home"], { clearHistory: true });
            }, (error) => alert({
                title: "Erreur",
                message: error.error,
                okButtonText: "OK"
            }));
        }

      }

    ngOnInit(): void {
    }
}
