import { ChangeDetectorRef, Component, ElementRef, inject, Input, OnInit, ViewChild } from '@angular/core';
import { State } from 'src/app/shared/state';

@Component({
  selector: 'step',
  templateUrl: './step.component.html',
  styleUrls: ['./step.component.scss'],
})
export class StepComponent  implements OnInit {
  @Input() title?: string;
  private _disableButton:boolean = false;
  @Input() 
  set disableButton(value){
    this._disableButton = value;
    this.stateService.setDisableButton(this.disableButton);
  }
  get disableButton(){
    return this._disableButton;
  }
  hidden:boolean=false;
  index = 0;
  last:boolean=false;

  stateService = inject(State);
  cdr = inject(ChangeDetectorRef);

  @ViewChild('itemContainer') itemContainer!: ElementRef<HTMLElement>;

  constructor() { }

  ngOnInit() {
    this.stateService.currentIndex$.subscribe(current => {
      if(this.index===current){
        this.stateService.setDisableButton(this.disableButton);
      }
    })
  }

    markForCheck(): void {
    this.cdr.markForCheck();
  }

}
