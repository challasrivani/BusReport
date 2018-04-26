import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import {busOrg, busData} from './busOrgs';
import { NgSwitchCase } from '@angular/common';

@Component({
  selector: 'data-table',
  template:  `
  <div>
    <table class="table table-striped tablepanel">
        <thead class="tablehead">
            <tr>
                <th>Bus ID</th>
                <th>Route Variant</th>
                <th>Status</th>
            </tr>
        </thead>
        <tbody class="tablebody">
              <tr *ngFor="let row of reportData" [ngSwitch]="row.deviationFromTimetable - 100">
                <td>{{ row.busId }}</td>
                <td><b>{{ row.routeVariant.slice(0,3) }}</b>{{ row.routeVariant.slice(3) }}</td>
                <td *ngIf="row.deviationFromTimetable > 0 && row.deviationFromTimetable < 100" 
                    class="ontime">On Time</td>
                <td *ngIf="row.deviationFromTimetable < 0" class="early">Early</td>
                <td *ngIf="row.deviationFromTimetable > 100" class="late">Late</td>
                <td *ngIf="row.deviationFromTimetable == null" class="unknown">UnKnown</td>
              </tr>
        </tbody>
    </table>
  </div>
        
  `,
  styles: [
    `
    .tablepanel{
        background-color:black;
        color:white;
        max-width: 400px;
        border-color: transparent;
        border-radius: 6px;
        width: 100%;
      }
    .tablehead{
        border-color: transparent;
        
        color:white;
        max-width: 400px;
        border-radius: 6px;
        padding-left: 5px;
        padding-right: 5px;
        margin-top: -15px;
        width: 100%;
         background: linear-gradient(to bottom, #00ffff 0%, #000066 93%);
      }
      .tablebody{
        border-color: transparent;
        background-color: white;
        color: black;
        max-width: 400px;
        border-radius: 6px;
        padding-left: 5px;
        padding-right: 5px;
        width: 100%;
        text-align:center;
      }

    table {
        border:none;
        border-radius:5px;;
        border-collapse: collapse;
        border-spacing:0;

    }
      td,th{
        border:none;
      }

      tr{
          border-color:1px solid #ccc;
      }
    .ontime {
      color: green;
    }
    .early {
      color:blue;
    }
    .late {
      color:red;
    }
    .unknown{
        color:black;
    }
    `  
  ],
})
export class DataTableComponent {
  @Input() reportData: busData[];
  constructor() {}

  private calcDeviation(){

  }
  
}
