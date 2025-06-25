import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HeroComponent } from './components/hero/hero.component';
import { FastReservationsComponent } from './components/fast-reservations/fast-reservations.component';
import { UiTitleComponent } from '@shared/ui/ui-title/ui-title.component';



@Component({
  selector: 'app-home-page',
  imports: [
    HeroComponent,
    FastReservationsComponent,
    UiTitleComponent,
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePageComponent {

}
