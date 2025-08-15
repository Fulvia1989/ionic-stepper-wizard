import { Component, computed, ContentChildren, inject, OnInit, QueryList, signal } from '@angular/core';
import { IonButton, IonCol, IonGrid, IonIcon, IonRow } from '@ionic/angular/standalone';
import { State } from 'src/app/shared/state';
import { StepComponent } from '../step/step.component';
import { DestroyService } from 'src/app/shared/destroy';

@Component({
  selector: 'wizard',
  templateUrl: './wizard.component.html',
  styleUrls: ['./wizard.component.scss'],
  imports:[IonButton,IonIcon,IonRow,IonCol,IonGrid],
  standalone:true
})
export class WizardComponent  implements OnInit {

  stateService = inject(State);
  destroy = inject(DestroyService);

  currentIndex = signal(0);
  disabledButton = false;
  title = computed(() => this.steps.get(this.currentIndex())?.title);


  @ContentChildren(StepComponent) steps!: QueryList<StepComponent>;

  constructor() { }

  ngOnInit() {
    this.stateService.disableButton$.subscribe(res => {
      this.disabledButton = res;
    });
    this.stateService.currentIndex$.subscribe(res => {
      this.updateChildrenSteps();
    })

  }

  ngAfterContentInit(){

    this.updateChildrenSteps();
  }

  pre(): void {
    this.currentIndex.set(this.currentIndex() - 1) ;
    this.stateService.setCurrentIndex(this.currentIndex());
  }

  next(): void {
    if(this.currentIndex()<this.steps.length){

      this.currentIndex.set(this.currentIndex() + 1) ;
      this.stateService.setCurrentIndex(this.currentIndex());

    }
  }

    private updateChildrenSteps(): void {
    if (this.steps) {

      this.steps.toArray().forEach((step, index) => {
        step.index = index ;
        step.hidden = this.currentIndex() !==index;
        //step.markForCheck();
        console.log(step);
      });
    }
  }

}
