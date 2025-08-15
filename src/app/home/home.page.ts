import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import { StepComponent } from '../components/step/step.component';
import { WizardComponent } from '../components/wizard/wizard.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports:[IonHeader, IonToolbar, IonTitle, IonContent,
    WizardComponent,StepComponent,    
  ],})
export class HomePage {
  steps = [
    {
      label:'Start',
      disabled:false,
      content:`<p>this is the first step</p>`
    },
    {
      label:null,
      disabled:false,
      content:`<p>this is the second step</p>`

    },
    {
      label:'End',
      disabled:false,
      content:`<p>this is the last step</p>`

    }
  ]
  constructor() {}
}
