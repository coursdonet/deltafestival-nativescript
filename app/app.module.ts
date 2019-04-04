
import { NativeScriptUIGaugeModule } from "nativescript-ui-gauge/angular";
import { NativeScriptAnimationsModule } from "nativescript-angular/animations";

import { CoreModule } from "./core/core.module";
import { ListItemComponent } from "./components/list-item/list-item.component";
import { SearchBarComponent } from "./components/search-bar/search-bar.component";
import { CustomActionBarComponent } from "./components/custom-action-bar/custom-action-bar.component";
import { CircularProgressBarComponent } from "./components/circular-progress-bar/circular-progress-bar.component";

import { registerElement } from "nativescript-angular/element-registry";
import { CardView } from "./nativescript-cardview";
import { SwipeLayout } from "./nativescript-swipe-layout";
registerElement("CardView", () => CardView);
registerElement("SwipeLayout", () => SwipeLayout);

//------------------------------------------------
import { NgModule } from "@angular/core";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { NativeScriptHttpModule } from "nativescript-angular/http";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { NativeScriptUIListViewModule } from "nativescript-ui-listview/angular";

import { AppComponent } from "./app.component";
import { routes, navigatableComponents } from "./app.routing";
import { AnimationsService } from "./shared/animations-service";
import { NewsfeedService } from "./shared/newsfeed/newsfeed.service";
import { BottomBarModule } from "./components/bottomBar/bottomBar.module"
import { environment } from "../app/environment/environment";
import { ApiModule } from '../app/services/api.module';
import { PublicationService } from '../app/services/services/publication.service';
import { HttpClientModule } from "@angular/common/http";
import { SearchBarModule } from "./components/search-bar/search-bar.module";
import { ListItemModule } from "./components/list-item/list-item.module";
import { CustomActionBarModule } from "./components/custom-action-bar/custom-action-bar.module";

@NgModule({
  imports: [
    NativeScriptModule,
    NativeScriptFormsModule,
    NativeScriptHttpModule,
    NativeScriptRouterModule,
    NativeScriptRouterModule.forRoot(routes),
    NativeScriptUIListViewModule,
    NativeScriptUIGaugeModule,
    NativeScriptAnimationsModule,
    BottomBarModule,
    CoreModule,
    HttpClientModule,
    ApiModule,
    SearchBarModule,
    CustomActionBarModule,
    ListItemModule
  ],
  declarations: [
    AppComponent,
    ...navigatableComponents
  ],
  providers: [
    AnimationsService,
    NewsfeedService,
    { provide: environment.API_BASE_PATH, useValue: environment.API_BASE_PATH }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }