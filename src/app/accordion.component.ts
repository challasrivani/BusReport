import { Component, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'tp-accordion',
  template: `
   
    <div class="accordion-head" (click)="onClick($event)">
      <h3>
          {{ title }} - {{ date }} 
          <img *ngIf="!active" src="../assets/busSchedule.png" style="float:right;width:30px;height:30px;">
          <img *ngIf="active" src="../assets/closeSchedule.png" style="float:right;width:30px;height:30px;">
      </h3>
    </div>
    <div class="accordion-body" [class.active]="active">
      <ng-content></ng-content>
    </div>
    
  `,
  styles: [
    `
    .accordion-head {
      cursor: pointer;
      line-height:35px;
      max-width: 400px;
      background-color: white;
      border-radius: 6px;
      padding-left: 5px;
      padding-right: 5px;  
    }
    .accordion-body {
      display: none;
      max-width: 400px;
      background-color: white;
      border-radius: 6px;
      padding-left: 5px;
      padding-right: 5px;
      margin-top: -15px;
    }
    .accordion-body.active {
      display: block;
      -webkit-animation: fadeIn .3s;
      animation: fadeIn .3s;
    }
    
    @-webkit-keyframes fadeIn {
      from { opacity: 0; transform: scale(0); }
        to { opacity: 1; transform: scale(1); }
    }  
    @keyframes fadeIn {
      from { opacity: 0; transform: scale(0); }
        to { opacity: 1; transform: scale(1); }
    }
    `  ,
    "../node_modules/bootstrap/dist/css/bootstrap.css",
    "../node_modules/font-awesome/css/font-awesome.css"
  ],
})
export class Accordion {
  
  @Input() title: string;

  @Input() date: string;
  
  @Input() active: boolean = false;
  
  @Output() toggleAccordion: EventEmitter<boolean> = new EventEmitter();

  constructor() {}
  
  onClick(event) {
    event.preventDefault();
    this.toggleAccordion.emit(this.active);
  }

}
