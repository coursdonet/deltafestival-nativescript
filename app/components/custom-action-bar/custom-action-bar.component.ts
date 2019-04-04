import { Component, Input } from "@angular/core";
import { RouterExtensions } from "nativescript-angular";
import { Router } from "@angular/router";

@Component({
    selector: "custom-action-bar",
    moduleId: module.id,
    templateUrl: "./custom-action-bar.component.html",
    styleUrls: ['../../tinderLike/tinderLike.component.css']
})
export class CustomActionBarComponent {
    @Input() title: string = "";
    @Input() isBack: boolean = false;
    @Input() col: number = 0;
    @Input() row: number = 0;
    @Input() colSpan: number = 0;
    @Input() rowSpan: number = 0;
    constructor(private routerExtensions: RouterExtensions, private router: Router) {
    }

    goBack() {
        this.routerExtensions.back();
    }
}
