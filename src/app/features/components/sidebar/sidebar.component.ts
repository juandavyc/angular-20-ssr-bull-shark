import { ChangeDetectionStrategy, Component, output } from '@angular/core';

@Component({
  selector: 'ui-sidebar',
  imports: [
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarComponent {

  public closeDrawer = output<void>();

}
