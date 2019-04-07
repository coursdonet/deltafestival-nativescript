import { Component, OnInit, NgZone } from "@angular/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";

import * as app from "tns-core-modules/application";
import { Concert, UserConcert, ConcertLocation, User } from "../api/models";
import { ConcertService, UserConcertService, ConcertLocationService, UsersService } from "../api/services";
import { EventData } from "tns-core-modules/ui/page/page";
import { Button } from "tns-core-modules/ui/button/button";
import { CardView } from "../../../node_modules/nativescript-cardview";
import { registerElement } from "nativescript-angular/element-registry";
import * as ApplicationSettings from "application-settings";

registerElement("CardView", () => CardView);

@Component({
    selector: "Planning",
    moduleId: module.id,
    templateUrl: "./planning.component.html",
    styleUrls: ["./planning.component.scss"]
})
export class PlanningComponent implements OnInit {

    concerts : Array<Concert>;
    userConcerts : Array<Concert>;
    concertLocation : ConcertLocation;
    user: User;
    userConcertsId: Array<UserConcert>;
    Programm = true;
    // concertData: ConcertService; 

    constructor(private userData: UsersService, private concertService: ConcertService, private userConcertService: UserConcertService) {

    }

    ngOnInit(): void {
  
        this.userData.GetUser(ApplicationSettings.getNumber("userId")).subscribe((currUser) => {
            this.user = currUser;
            this.refreshTabs();
        });
        }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }

    private refreshTabs() {
        this.concertService.GetConcertsItems(this.user.id).subscribe((currentConcert) => {
            this.concerts = currentConcert;
        })
        this.userConcertService.GetUserConcertsById(this.user.id).subscribe((currentConcert) => {
            this.userConcertsId = currentConcert;
        })
    }

    private addConcert(args : EventData): void{
        let button = <Button>args.object;
        let concert = button.get("concertId");

        for (let i = 0; i < this.userConcerts.length; i++) {
            if (this.userConcerts[i]["concertId"] == concert) {
                this.userConcertService.DeleteUserConcertItem(concert).subscribe();
                return;
            }
        }
        const concertToAdd = {
            userId : this.user.id,
            concertId : concert,
        }
        this.userConcertService.PostUserConcertItem(concertToAdd).subscribe();
    }

    remove(id: number): void {
        this.userConcertService.DeleteUserConcertItem(id).subscribe((result) => {
            this.refreshTabs();
        })
    }

    add(concertId: number) {
        this.userConcertService.PostUserConcertItem({ concertId : concertId, userId : this.user.id}).subscribe((result) => {
            this.refreshTabs();
        }, (error) => alert({
            title: "Hop hop hop !",
            message: error.error,
            okButtonText: "Non :("
        }))
    }

    private isSelected(args : EventData): boolean{
        let button = <Button>args.object;
        let currentConcert: number = button.get("concertId");

        for (let i = 0; i < this.userConcerts.length; i++) {
            if (this.userConcerts[i]["concertId"] == currentConcert) {
                return true;
            }
        }
        return false;
    }


}
