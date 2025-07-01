import { ChangeDetectionStrategy, Component } from '@angular/core';
import { UiTitleComponent } from '@shared/ui/ui-title/ui-title.component';

@Component({
  selector: 'ubication',
  imports: [
    UiTitleComponent,
  ],
  templateUrl: './ubication.component.html',
  styleUrl: './ubication.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UbicationComponent { }
