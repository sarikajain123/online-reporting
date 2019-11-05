import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material';
import { DescriptionDialogComponent } from '../description-dialog/description-dialog.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard-content',
  templateUrl: './dashboard-content.component.html',
  styleUrls: ['./dashboard-content.component.scss']
})
export class DashboardContentComponent implements OnInit {
  @Input() title: any;
  @Input() filterItems: any;
  @Input() tableHeading: any;
  @Input() tableData: any;
  filter = false;
  rowIndex: number;
  panelOpenState = false;
  openPanel = false;
  pageLenght: number;
  pageNo = 1;

  chunkArray = [];
  chunkSize = 10;

  constructor(private dialog: MatDialog, private router: Router) {

  }

  ngOnInit() {
  }

  ngDoCheck() {
    this.refresh();
  }

  refresh() {
    this.chunkArray = [];
    for (let i = 0; i < this.tableData.length; i += this.chunkSize) {
      this.chunkArray.push(this.tableData.slice(i, i + this.chunkSize));
    }
    this.pageLenght = this.chunkArray.length;
  }
  rowClicked(index) {
    this.rowIndex = index;
  }
  openBox() {
    this.openPanel = !this.openPanel;

    // this.panelOpenState = !this.panelOpenState;
  }
  openDialog(temp) {
    let dialogRef = this.dialog.open(DescriptionDialogComponent, {
      height: 'auto',
      width: '40%',
      data: {
        description: temp
      }
    });
  }
  openForm(data) {
    this.router.navigate(['form'], {
      queryParams: {
        id: data[0]
      }
    });
  }
}
