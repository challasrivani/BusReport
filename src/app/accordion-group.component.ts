import { Component, ContentChildren, QueryList, AfterContentInit, OnDestroy } from '@angular/core';

import { Accordion } from './accordion.component';

@Component({
  selector: 'tp-accordion-group',
  template: `
    <ng-content></ng-content>
  `
})
export class AccordionGroup {
  
  @ContentChildren(Accordion) accordions: QueryList<Accordion>;
  private subscriptions = [];
  
  private _accordions: QueryList<Accordion>;

  constructor() {}
  
  ngAfterContentInit() {
    
    this._accordions = this.accordions;
    this.removeSubscriptions();
    this.addSubscriptions();
    
    this.accordions.changes.subscribe(rex => {
      this._accordions = rex;
      this.removeSubscriptions();
      this.addSubscriptions();
    });
  }
  
  addSubscriptions() {
    this._accordions.forEach(a => {
      let subscription = a.toggleAccordion.subscribe(e => {
        this.toogleAccordion(a);
      });
      this.subscriptions.push(subscription);
    });
  }
  
  removeSubscriptions() {
    this.subscriptions.forEach(sub => {
      sub.unsubscribe();
    });
  }
  
  toogleAccordion(accordion) {
    if (!accordion.active) {
      this.accordions.forEach(a => a.active = false);
    }
    // set active accordion
    accordion.active = !accordion.active;
  }
  
  ngOnDestroy() {
    this.removeSubscriptions();
  }

}
