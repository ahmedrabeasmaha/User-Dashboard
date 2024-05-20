import { Component, ContentChild, Input, OnInit, TemplateRef } from '@angular/core';
import { AsyncPipe, NgIf, NgTemplateOutlet } from '@angular/common';
import { RouteConfigLoadStart, RouteConfigLoadEnd } from '@angular/router';
import { Router } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { LoadingService } from '../../services/loading/loading.service';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

@Component({
  selector: 'app-spinner',
  standalone: true,
  imports: [MatProgressSpinnerModule, AsyncPipe, NgIf, NgTemplateOutlet],
  templateUrl: './spinner.component.html',
  styleUrl: './spinner.component.css'
})
export class SpinnerComponent implements OnInit {
  loading$: Observable<boolean>;

  @Input()
  private detectRouteTransitions = false;

  @ContentChild("loading")
  public customLoadingIndicator: TemplateRef<any> | null = null;

  constructor(private _loadingService: LoadingService, private _router: Router) {
    this.loading$ = this._loadingService.loading$;
  }

  ngOnInit() {
    if (this.detectRouteTransitions) {
      this._router.events.pipe(tap((event) => {
        if (event instanceof RouteConfigLoadStart) {
          this._loadingService.loadingOn();
        }
        else if (event instanceof RouteConfigLoadEnd) {
          this._loadingService.loadingOff();
        }
      })).subscribe();
    }
  }
}
