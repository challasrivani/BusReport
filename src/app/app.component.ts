import { Component, OnInit, OnDestroy } from '@angular/core';
import { AppService } from './app.service';
import { busOrg, busData } from './busOrgs';

@Component({
  selector: 'app-root',
  template:  `
  <h1>Bus Reports</h1>
  <tp-accordion-group>
      <tp-accordion  *ngFor="let bo of busOrgs" [title]="bo.organisation" [date]="bo.date">
        <data-table class="dataTable" [reportData]="bo.busData"> </data-table>
        <textarea rows="4" cols="50" placeholder="Enter notes here" 
          style="border:1px solid #ababab;margin-top:5px;margin-left:10px; width:350px;border-radius:4px;color:black;"></textarea><br/>
        <button style="background:linear-gradient(to bottom, #00ffff 0%, #000066 93%);
        cursor:pointer;margin-left:5px;margin-bottom:5px;border-radius:4px;">Save Notes</button>
      </tp-accordion>
    </tp-accordion-group>`,
    styles:[
      `
        .dataTable{
          background-color:white;
          min-width:300px;
          color:black;
          border-radius:10px;
        }
        .busReportPanel{
          background-color:white;
          color:black;
          border-radius:6px;
          max-width:400px;
          padding-left:5px;
          height:35px;
        }
      
      `
    ]
})
export class AppComponent implements OnInit, OnDestroy{
  busOrgs: busOrg[] = [];
  private subscription: any;

  constructor(private appSvc: AppService) {}
  
  ngOnInit() {
    this.subscription = this.appSvc.getBusOrgs().subscribe((res: busOrg[]) => this.busOrgs = res);
  }
  
  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
  
}
