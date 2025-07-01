import { ChangeDetectionStrategy, Component } from '@angular/core';
import { UiTitleComponent } from '@shared/ui/ui-title/ui-title.component';

@Component({
  selector: 'tours-services',
  imports: [
    UiTitleComponent,
  ],
  templateUrl: './tours-services.component.html',
  styleUrl: './tours-services.component.css',
  //changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToursServicesComponent { }
