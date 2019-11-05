import { Component, OnInit } from '@angular/core';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  filterItems = ['ID', 'Name', 'Status', 'Date', 'Budget'];
  tableHeading = [{ id: 'ID', width: '37px' },
  { id: 'Raised on', width: '99px' },
  { id: 'Updated on', width: '83px' },
  { id: 'Status', width: '83px' },
  { id: 'Description', width: '184px' },
  { id: 'Category', width: '103px' },
  { id: 'Impacted Businesses', width: '87px' },
  { id: 'Impacted Countries', width: '77px' },
  { id: 'Impacted Entities', width: '73px' },
  { id: 'APAC GC Lead', width: '69px' },
  { id: 'Attachments', width: '62px' },
  { id: 'Author', width: '132px' },
  { id: 'Controls', width: '59px' }];
  teamTableData = [];
  apacTableData = [];
  title1 = 'My team active items';
  title2 = 'APAC GC active items';
  serviceData: any;

  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this._httpService.getJSON().subscribe(data => {

      data.Requests.forEach(request => {
        const user = data.Users.find(ele => ele.Id === request.Requestor);
        const moreInfo = data.RequestsInfo.find(ele => ele.Id === request.Id);
        const json = {
          'id': request.Id,
          'status': request.Status,
          'Description': `<span>${request.Description} </span> `,
          'ImpactedCountries': '',
          'ImpactedEntities': '',
          'Attachments': '',
          'Author': user.Email,
          'caterory': moreInfo.caterory,
          'impactedBusiness': moreInfo.impactedBusiness,
          'updatedOn': moreInfo.updatedOn,
          'raisedOn': moreInfo.raisedOn,
          'APAC_Gc_Lead': moreInfo.APAC_Gc_Lead,
          'controls': `<span>Open</span> <span style='font-size:30px;'>&#8594;</span>`

        };
        const ary = [json.id, json.raisedOn, json.updatedOn, json.status,
        json.Description, json.caterory, json.impactedBusiness, json.ImpactedCountries,
        json.ImpactedEntities, json.APAC_Gc_Lead, json.Attachments, json.Author];

        this.teamTableData.push(ary);
      });

      this.apacTableData = this.teamTableData; // dummy data for APAC
    });
  }

}
