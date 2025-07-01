import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HeroComponent } from './components/hero/hero.component';
import { FastReservationsComponent } from './components/fast-reservations/fast-reservations.component';
import { UiTitleComponent } from '@shared/ui/ui-title/ui-title.component';
import { HighlightsComponent } from './components/highlights/highlights.component';
import { FacilitiesComponent } from './components/facilities/facilities.component';
import { ToursServicesComponent } from './components/tours-services/tours-services.component';
import { UbicationComponent } from './components/ubication/ubication.component';

@Component({
  selector: 'app-home-page',
  imports: [
    HeroComponent,
    FastReservationsComponent,
    HighlightsComponent,
    FacilitiesComponent,
    ToursServicesComponent,
    UbicationComponent,
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePageComponent {

}
