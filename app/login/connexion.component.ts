import { Component, OnInit } from "@angular/core";
import { TextField } from "tns-core-modules/ui/text-field";

@Component({
    selector: "Connexion",
    moduleId: module.id,
    templateUrl: "./connexion.component.html",
    styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {
    onButtonTap(): void {
        console.log("Button was pressed");
    }


    constructor() {
    }

    
 

    ngOnInit(): void {
    }
}
