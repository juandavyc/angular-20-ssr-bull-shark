import { ChangeDetectionStrategy, Component } from '@angular/core';
import { UiTitleComponent } from '@shared/ui/ui-title/ui-title.component';

@Component({
  selector: 'facilities',
  imports: [
    UiTitleComponent,
  ],
  templateUrl: './facilities.component.html',
  styleUrl: './facilities.component.css',
  ///changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FacilitiesComponent { }
