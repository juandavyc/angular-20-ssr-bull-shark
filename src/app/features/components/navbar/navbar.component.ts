import { ChangeDetectionStrategy, Component, output } from '@angular/core';
import { LogoComponent } from '@shared/ui/logo/logo.component';
import { SwapThemeComponent } from '../swap-theme/swap-theme.component';
import { MenuItemsComponent } from '../menu-items/menu-items.component';


@Component({
  selector: 'ui-navbar',
  imports: [
    LogoComponent,
    SwapThemeComponent,
    MenuItemsComponent
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent {

  public openDrawer = output<void>();
}
