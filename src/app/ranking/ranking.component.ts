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
  public ranking: any[] = [];

  constructor(private rankingService: RankingService) { }

  ngOnInit() {
    this.rankingService.Ranking().subscribe((ranking) => {
      console.log("ok", ranking);
      this.ranking = snapshotToArray(ranking);
      this.ranking.push(snapshotToArray(ranking));
      this.ranking.push(snapshotToArray(ranking));
      this.ranking.push(snapshotToArray(ranking));
      this.ranking.push(snapshotToArray(ranking));
      this.ranking[1].name = "Test name 2";
      this.ranking[2].name = "Test name 3";
      this.ranking[3].name = "Test name 4";
      this.ranking[4].name = "Test name 5";
    });
  }

  onDrawerButtonTap(): void {
    const sideDrawer = <RadSideDrawer>app.getRootView();
    sideDrawer.showDrawer();
  }



}

export const snapshotToArray = snapshot => {
  let returnArr = [];

  snapshot.forEach(childSnapshot => {
    console.log(childSnapshot);
    let item = childSnapshot;
    returnArr.push(item);
  });

  return returnArr;
};
