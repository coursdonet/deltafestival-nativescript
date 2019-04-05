import { Component, OnInit } from "@angular/core";
import { TextField } from "tns-core-modules/ui/text-field";
import { FormControl } from '@angular/forms';
import { Router } from "@angular/router";

@Component({
    selector: "Reglagesgestionequipe",
    moduleId: module.id,
    templateUrl: "./reglagesgestionequipe.component.html",
    styleUrls: ['./reglagesgestionequipe.component.css']
})




export class ReglagesgestionequipeComponent implements OnInit {


    constructor(private router: Router) {
        
    }

    trouverequipe() {
        this.router.navigate(['matchequipe']);
    }

    ngOnInit(): void {
    }
}
