import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Page } from "tns-core-modules/ui/page";

import { User } from "../shared/user/user.model";
import { UserService } from "../shared/user/user.service";
import { Visibility } from "tns-core-modules/ui/enums/enums";

@Component({
    selector: "gr-login",
    providers: [UserService],
    styleUrls: ["login/login.component.css"],
    templateUrl: "login/login.component.html"
})
export class LoginComponent implements OnInit {
    user: User;
    isLoggingIn = true;
    
    constructor(private router: Router, private userService: UserService, private page: Page) {
        this.user = new User();
        this.user.email = "toto@live.fr";
        this.user.password = "toto";
    }

    ngOnInit() {
        this.page.actionBarHidden = true;        
    }

    submit() {
        if (this.isLoggingIn) {
            this.login();
        } else {
            this.signUp();
        }
    }

    login() {
        this.userService.login(this.user)
            .subscribe(
                () => this.router.navigate(["/feed"]),
                (error) => alert("Nous ne trouvons pas votre compte.")
            );
    }

    signUp() {
        this.userService.register(this.user)
            .subscribe(
            () => {
                    alert("Compte créer avec succès.");
                    this.toggleDisplay();
                },
                () => alert("Nous ne pouvons pas créer votre compte.")
            );
    }

    toggleDisplay() {
        this.isLoggingIn = !this.isLoggingIn;
    }
}
