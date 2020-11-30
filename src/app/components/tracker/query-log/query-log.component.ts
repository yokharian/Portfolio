import { formatDate } from '@angular/common';
import { GetLogsResponse, Log } from './../../../shared/interfaces';
import { AfterViewInit, Component, Inject, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';

import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

import { UserService } from 'src/app/shared/user.service';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-query-log',
  templateUrl: './query-log.component.html',
})
export class QueryLogComponent {
  options: FormGroup;
  idControl = new FormControl('', Validators.required);
  spanControl = new FormGroup({
    start: new FormControl(''),
    end: new FormControl(''),
  });
  limitControl = new FormControl();

  constructor(
    public dialog: MatDialog,
    private _USER: UserService,
    FB: FormBuilder,
  ) {
    this.options = FB.group({
      _id: this.idControl,
      span: this.spanControl,
      limit: this.limitControl,
    });
  }

  search(): void {
    const { _id, limit } = this.options.value;
    const start = this.options.value.span.start;
    const end = this.options.value.span.end;

    const from = start && formatDate(start, 'yyyy-MM-dd', 'es-MX');
    const to = end && formatDate(end, 'yyyy-MM-dd', 'es-MX');

    this._USER
      .GetLogs(_id, from, to, limit)
      .toPromise()
      .then((response: GetLogsResponse) => {
        console.log(response);
        this.dialog.open(LogTableComponent, { data: response });
      });
  }
}

@Component({
  selector: 'app-log-table-dialog',
  templateUrl: './log-table.component.html',
})
export class LogTableComponent implements AfterViewInit {
  displayedColumns = ['description', 'duration', 'date'];
  dataSource: MatTableDataSource<Log>;

  constructor(@Inject(MAT_DIALOG_DATA) public data: GetLogsResponse) {
    this.dataSource = new MatTableDataSource<Log>(data.log);
  }

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
}
