import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import {
  chevronForwardOutline,
  chevronBackOutline
} from 'ionicons/icons';
export const icons = {
    chevronForwardOutline,
  chevronBackOutline
}
import { addIcons } from 'ionicons';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [IonApp, IonRouterOutlet],
})
export class AppComponent {
  constructor() {
      addIcons(icons);
  }
}
