import { Component, NO_ERRORS_SCHEMA } from '@angular/core';
import { PageRouterOutlet } from '@nativescript/angular';
import { PagerModule } from '@triniwiz/nativescript-pager/angular';

@Component({
  selector: 'ns-app',
  templateUrl: './app.component.html',
  imports: [PageRouterOutlet, PagerModule],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AppComponent {
  items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
}
