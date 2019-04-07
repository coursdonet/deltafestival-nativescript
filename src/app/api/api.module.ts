/* tslint:disable */
import { NgModule, ModuleWithProviders } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ApiConfiguration, ApiConfigurationInterface } from './api-configuration';

import { AuthService } from './services/auth.service';
import { CheckpointService } from './services/checkpoint.service';
import { ConcertService } from './services/concert.service';
import { ConcertLocationService } from './services/concert-location.service';
import { CrushService } from './services/crush.service';
import { IgnoredService } from './services/ignored.service';
import { LocalizationsService } from './services/localizations.service';
import { MoodService } from './services/mood.service';
import { MoodsService } from './services/moods.service';
import { PlaceService } from './services/place.service';
import { PublicationService } from './services/publication.service';
import { RankingService } from './services/ranking.service';
import { TeamService } from './services/team.service';
import { TeamCheckpointService } from './services/team-checkpoint.service';
import { TeamMembersService } from './services/team-members.service';
import { TeamsService } from './services/teams.service';
import { TinderService } from './services/tinder.service';
import { UserService } from './services/user.service';
import { UserConcertService } from './services/user-concert.service';
import { UsersService } from './services/users.service';
import { UserValidatedCheckPointService } from './services/user-validated-check-point.service';
import { ValuesService } from './services/values.service';
import { ZoneService } from './services/zone.service';

/**
 * Provider for all Api services, plus ApiConfiguration
 */
@NgModule({
  imports: [
    HttpClientModule
  ],
  exports: [
    HttpClientModule
  ],
  declarations: [],
  providers: [
    ApiConfiguration,
    AuthService,
    CheckpointService,
    ConcertService,
    ConcertLocationService,
    CrushService,
    IgnoredService,
    LocalizationsService,
    MoodService,
    MoodsService,
    PlaceService,
    PublicationService,
    RankingService,
    TeamService,
    TeamCheckpointService,
    TeamMembersService,
    TeamsService,
    TinderService,
    UserService,
    UserConcertService,
    UsersService,
    UserValidatedCheckPointService,
    ValuesService,
    ZoneService
  ],
})
export class ApiModule {
  static forRoot(customParams: ApiConfigurationInterface): ModuleWithProviders {
    return {
      ngModule: ApiModule,
      providers: [
        {
          provide: ApiConfiguration,
          useValue: {rootUrl: customParams.rootUrl}
        }
      ]
    }
  }
}
