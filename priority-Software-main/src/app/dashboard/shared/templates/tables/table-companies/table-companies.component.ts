import { AfterViewInit, Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { CompaniesModuleModule } from '../../../Modules/companies-module.module';
import { GetApiService } from '../../../service/getApi.service';
import { ServiceApiService } from '../../../service/serviceApi.service';

@Component({
  selector: 'app-table-companies',
  templateUrl: './table-companies.component.html',
  styleUrls: ['../tablesStyle.component.scss']
})
export class TableCompaniesComponent implements AfterViewInit {

  //Displayes Colums items
  displayedColumnsCompanies = ['companyId', 'company', 'companyAddress', 'url', 'baseCurrency'];

  // DATASOURCE
  dataSourceCompanies = new MatTableDataSource<CompaniesModuleModule>();
  subscribe!: Subscription;

  // Pagination
  @ViewChild('paginator') paginator!: MatPaginator;

  // Id
  companyId: any;

  // Send company Id from component table Companies to companies Component
  @Output() companyIdData: EventEmitter<boolean> = new EventEmitter();

  constructor(private getApi: GetApiService, private service: ServiceApiService) { }

  ngAfterViewInit() {
    this.getFetchCompanies();
    this.dataSourceCompanies.paginator = this.paginator;
  }

  // function row click companies 
  clickRowCompany(row: any) {
    this.companyId = row.companyId;
    this.service.getId(this.companyId).subscribe(
      (data) => {
        this.companyId = data;
        this.companyIdData.emit(this.companyId);
        localStorage.setItem('companyId', this.companyId);
      }
    );
  }

  // function Fetch Companies
  getFetchCompanies() {
    this.subscribe = this.getApi.fetchCompanies().subscribe((res) => {
      this.dataSourceCompanies.data = res;
    });
  }
  ngOnDestroy(): void {
    this.subscribe.unsubscribe;
  }
}


