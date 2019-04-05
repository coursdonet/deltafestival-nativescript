import { Component, OnInit } from "@angular/core";
import { TextField } from "tns-core-modules/ui/text-field";
import { FormControl } from '@angular/forms';
import { Router } from "@angular/router";

export interface Food {
    value: string;
    viewValue: string;
}
@Component({
    selector: "Inscription",
    moduleId: module.id,
    templateUrl: "./inscription.component.html",
    styleUrls: ['./inscription.component.css']
})



export class InscriptionComponent implements OnInit {
    public htmlString: string;
    //public value: string;

    constructor(private router: Router) {
        // this.htmlString = "<select><option value='bjr'>Bonjour</option><option value='test'>Message de test</option></select>";
    }

    foods: Food[] = [
        { value: 'steak-0', viewValue: 'Steak' },
        { value: 'pizza-1', viewValue: 'Pizza' },
        { value: 'tacos-2', viewValue: 'Tacos' }
    ];

    Inscription() {
        this.router.navigate(["gestiondesequipes"]);
    }


    ngOnInit(): void {
    }
}
