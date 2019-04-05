import { Component, OnInit } from "@angular/core";
import { TextField } from "tns-core-modules/ui/text-field";
import { Router } from "@angular/router";

@Component({
    selector: "Home",
    moduleId: module.id,
    templateUrl: "./home.component.html",
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    onButtonTap(): void {
        console.log("Button was pressed");
    }


    constructor(private router: Router) {
    }

    Connexion() {
        this.router.navigate(["reglagesgestionequipe"]);
    }


    Inscription() {
        this.router.navigate(["inscription"]);
    }

    ngOnInit(): void {
    }
}
