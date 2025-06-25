import { Component, inject } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { delay, filter, map, Observable, startWith, take, tap } from 'rxjs';
import {toSignal} from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  protected title = 'bull-shark';

  private router  = inject(Router);

  public isLoading = toSignal(
    this.router.events.pipe(
      delay(500),
      filter(event => event instanceof NavigationEnd),
      map(()=>false),
      take(1),
    ), {initialValue: true}
  )


}

