import { Component, OnInit } from '@angular/core';
import { RadSideDrawer } from 'nativescript-ui-sidedrawer';
import * as app from "tns-core-modules/application";
import { RankingService } from "../api/services";

@Component({
  selector: 'ns-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.css'],
  moduleId: module.id,
})
export class RankingComponent implements OnInit {
  public ranking: any;

  constructor(private rankingService: RankingService) { }

  ngOnInit() {
    this.rankingService.Ranking().subscribe((ranking) => {
      console.log("ok", ranking);
    });
  }

  onDrawerButtonTap(): void {
    const sideDrawer = <RadSideDrawer>app.getRootView();
    sideDrawer.showDrawer();
  }



}
