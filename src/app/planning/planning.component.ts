import { Component, OnInit, NgZone } from "@angular/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";

import * as app from "tns-core-modules/application";
import { Concert, UserConcert, ConcertLocation, User } from "../api/models";
import { ConcertService, UserConcertService, ConcertLocationService, UsersService } from "../api/services";
import { EventData } from "tns-core-modules/ui/page/page";
import { Button } from "tns-core-modules/ui/button/button";

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
    // concertData: ConcertService; 

    constructor(private userData: UsersService, private concertService: ConcertService, private userConcertService: UserConcertService) {

            this.userData.GetUser(1).subscribe((currUser) => {
                this.user = currUser;
            });
        
    }

    ngOnInit(): void {
  
        this.concertService.GetConcertsItems().subscribe((currentConcert) => {
            this.concerts = currentConcert;
        })
        this.userConcertService.GetUserConcertsItems_1(1).subscribe((currentConcert) => {
            this.userConcertsId = currentConcert;
            console.log(this.userConcertsId);
        })
        // for (let i = 0; i < this.userConcertsId.length; i++) {
        //     this.userConcertsId[i].concert.id
        //     this.concertService.GetConcertItem(this.userConcertsId[i]["concertId"]).subscribe((currentConcert) => {
        //         this.userConcerts[i] = currentConcert;
        //     })
        // }
        }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
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
