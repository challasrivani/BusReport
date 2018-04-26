export class busOrg {
  organisation: string;
  date: string;
  busData: busData[];
}

export class busData{
    busId: string;
    routeVariant: string;
    deviationFromTimetable:number;
}
