import { AfterViewInit, Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { OfficesModuleModule } from '../../../Modules/offices-module.module';
import { ServiceApiService } from '../../../service/serviceApi.service';


@Component({
  selector: 'app-table-offices',
  templateUrl: './table-offices.component.html',
  styleUrls: ['../tablesStyle.component.scss']
})
export class TableOfficesComponent implements AfterViewInit {


  subscribe!: Subscription;

  //Displayes Colums items
  displayedColumnsOffices = ['officeId', 'office', 'company', 'url'];


  // DATASOURCE
  @Input() dataSourceOffices = new MatTableDataSource<OfficesModuleModule>();
  noData: string = "";

  // Pagination
  @ViewChild('paginator') paginator!: MatPaginator;

  // Id
  officeId: any;


  // Send office Id to companies Component
  @Output() officeIdData: EventEmitter<boolean> = new EventEmitter();

  constructor(private service: ServiceApiService, private router: Router) { }

  ngAfterViewInit() {

    this.dataSourceOffices.paginator = this.paginator;
    this.noData = "No Data : lenght = 0 ";
  }

  // function row click companies 
  clickRowOffice(row: any) {
    this.officeId = row.id;
    this.service.getId(this.officeId).subscribe(
      (data) => {
        this.officeId = data;
        this.officeIdData.emit(this.officeId);

        this.router.navigate(["dashboard/offices"]);
      }
    );
  }

}
