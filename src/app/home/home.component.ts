import { Component, OnInit, NgZone, Inject } from "@angular/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import { CheckpointService } from "../api/services/checkpoint.service";
import { UsersService } from "../api/services/users.service";
import { UserValidatedCheckPointService } from "../api/services/user-validated-check-point.service";
import { Checkpoint } from "../api/models/checkpoint";
import { UserValidatedCheckpoints } from "../api/models/user-validated-checkpoints";
import { Button } from "tns-core-modules/ui/button";

import * as app from "tns-core-modules/application";
import * as Geolocation from "nativescript-geolocation";
import { User, Team, TeamMembers, TeamCheckpoints } from "../api/models";
import { TeamMembersService, TeamCheckpointService, TeamsService } from "../api/services";
import { EventData } from "tns-core-modules/ui/page/page";
import { Observable } from "rxjs";

@Component({
    selector: "Home",
    moduleId: module.id,
    templateUrl: "./home.component.html",
    styleUrls: ["./home.component.scss"]
})

export class HomeComponent implements OnInit {

    latitude: number;
    longitude: number;
    checkpoints: Array<Checkpoint>;
    areaOfAction: number;
    calculatedArea: number;
    date: Date;
    user: User;
    team: Team;

    private watchId: number;
    
    constructor(private zone: NgZone, private data: CheckpointService, private userData: UsersService,
                private teamMembersService: TeamMembersService, private userService: UserValidatedCheckPointService,
                private teamCpService: TeamCheckpointService, private teamService: TeamsService) {
        this.latitude = 0;
        this.longitude = 0;
        this.calculatedArea = 0;
        this.userData.GetUser(4).subscribe((currUser) => {
            this.user = currUser;
            this.teamMembersService.GetUserTeam(this.user.id).subscribe((userTeam) => {
                this.teamService.GetTeam_1(userTeam.teamId).subscribe((userByTeam) => {
                    this.team = userByTeam;
                    console.log(this.team);
                });
            });
        });
    }

    ngOnInit(): void {
        
        this.data.GetCheckpointsItems().subscribe((data) => {
            this.checkpoints = data;
            this.checkpoints.forEach((currCheckpoint) => {
                currCheckpoint.isDiscovered = false;
                currCheckpoint.isTeamChecked = false;
            });
        });
        this.startWatchingLocation();

    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }

    updateLocation() {
        this.getDeviceLocation().then((result) => {
            this.latitude = result.latitude;
            this.longitude = result.longitude;
        }, (error) => {
            console.error(error);
        });
    }

    startWatchingLocation() {
        this.getDeviceLocation();
        this.watchId = Geolocation.watchLocation((location) => {
            if (location) {
                this.zone.run(() => {
                    this.latitude = location.latitude;
                    this.longitude = location.longitude;
                    this.calculeGeo();
                });
            }
        }, (error) => {
            console.error(error);
        }, { updateDistance: 0.2, minimumUpdateTime: 500 });
    }

    stopWatchingLocation() {
        if (this.watchId) {
            Geolocation.clearWatch(this.watchId);
            this.watchId = null;
        }
    }

    private getDeviceLocation(): Promise<any> {
        return new Promise((resolve, reject) => {
            Geolocation.enableLocationRequest().then(() => {
                Geolocation.getCurrentLocation({timeout : 10000}).then((location) => {
                    resolve(location);
                }).catch((error) => {
                    reject(error);
                });
            });
        });
    }

    private calculeGeo() {
        this.teamCpService.GetTeamCheckpoint_1(this.team.id).subscribe((listCheckpoints) => {
            let list: Array<TeamCheckpoints> = listCheckpoints;
            this.checkpoints.forEach((currCheckpoint) => {
                currCheckpoint.isTeamChecked = false;
                let isTeamChecked: boolean = false;
                list.forEach((currTeamCheckpoint) => {
                    if (currTeamCheckpoint.checkpointId == currCheckpoint.id) {
                        isTeamChecked = true;
                    }
                })
                if (isTeamChecked) {
                    currCheckpoint.isTeamChecked = true;
                    currCheckpoint.isDiscovered = false;
                } else if (currCheckpoint.isActive) {
                    const fromLong: number = currCheckpoint.longitude - (currCheckpoint.areaOfAction / 2 * 0.00001);
                    const toLong: number = currCheckpoint.longitude + (currCheckpoint.areaOfAction / 2 * 0.00001);
                    const fromLat: number = currCheckpoint.latitude - (currCheckpoint.areaOfAction / 2 * 0.00001);
                    const toLat: number = currCheckpoint.latitude + (currCheckpoint.areaOfAction / 2 * 0.00001);
                    currCheckpoint.isDiscovered = (this.longitude >= fromLong && this.longitude <= toLong
                        && this.latitude >= fromLat && this.latitude <= toLat);
                }
            });
        })
    }

    private validateCheckpoint(args : EventData): void {
        let button = <Button>args.object;
        let team: Observable<TeamMembers>;
        let checkpointId: number = button.get("checkpointId");
        const userValidatedCheckpoints = {
            checkpointId: checkpointId,
            userId : this.user.id,
            teamId : this.team.id
        };
        this.userService.PostUserValidatedCheckpoint(userValidatedCheckpoints).subscribe();
    }
}
