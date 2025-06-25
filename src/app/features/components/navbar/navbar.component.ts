import { ChangeDetectionStrategy, Component, output } from '@angular/core';
import { LogoComponent } from '@shared/ui/logo/logo.component';
import { SwapThemeComponent } from '../swap-theme/swap-theme.component';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'ui-navbar',
  imports: [
    LogoComponent,
    SwapThemeComponent,
    RouterLink,

  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent {

  public openDrawer = output<void>();
}
