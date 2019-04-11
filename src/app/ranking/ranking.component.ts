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
      this.ranking[0].name = "Equipe Name 1";
      this.ranking[0].point = 158;
      this.ranking[1].name = "Equipe Name 2";
      this.ranking[1].point = 148;
      this.ranking[2].name = "Equipe Name 3";
      this.ranking[2].point = 111;
      this.ranking[3].name = "Equipe Name 4";
      this.ranking[3].point = 98;
      this.ranking[4].name = "Equipe Name 5";
      this.ranking[4].point = 35;
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
