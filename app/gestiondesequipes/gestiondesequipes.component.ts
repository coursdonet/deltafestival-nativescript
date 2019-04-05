import { Component, OnInit } from "@angular/core";
import { TextField } from "tns-core-modules/ui/text-field";
import { FormControl } from '@angular/forms';
import { Router } from "@angular/router";

@Component({
    selector: "Gestiondesequipes",
    moduleId: module.id,
    templateUrl: "./gestiondesequipes.component.html",
    styleUrls: ['./gestiondesequipes.component.css']
})



export class GestiondesequipesComponent implements OnInit {


    constructor(private router: Router) {

    }

    reglages() {
        this.router.navigate(["reglagesgestionequipe"]);
    }


    

    ngOnInit(): void {
    }
}
