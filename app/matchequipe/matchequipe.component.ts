import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { SwipeGestureEventData, GesturesObserver, GestureTypes } from "ui/gestures";
import { GridLayout } from "ui/layouts/grid-layout";
import { AbsoluteLayout } from "ui/layouts/absolute-layout";
import { Label } from "ui/label";
import { Button } from "ui/button";

@Component({
    selector: "matchequipe",
    moduleId: module.id,
    templateUrl: "./matchequipe.component.html",
    styleUrls: ['./matchequipe.component.css']
})
export class MatchequipeComponent implements OnInit {
    constructor() {

    }
    ngOnInit(): void {
    }
}
