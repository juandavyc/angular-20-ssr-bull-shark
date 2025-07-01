import { ChangeDetectionStrategy, Component } from '@angular/core';
import { UiTitleComponent } from '@shared/ui/ui-title/ui-title.component';

@Component({
  selector: 'highlights',
  imports: [
    UiTitleComponent,
  ],
  templateUrl: './highlights.component.html',
  styleUrl: './highlights.component.css',
  //changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HighlightsComponent { }
