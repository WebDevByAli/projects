import { AfterViewInit, Component, Input } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';



import { CompaniesByIdModuleModule } from '../../../Modules/companies-module.module';

@Component({
  selector: 'app-company-id',
  templateUrl: './company-id.component.html',
  styleUrls: ['./company-id.component.scss']
})
export class CompanyIdComponent implements AfterViewInit {

  value = 'Clear me';

  // Displayes Colums items
  displayedColumnsCompanyId = ['companyId', 'company', 'companyAddress', 'url', 'baseCurrency'];


  @Input() dataSourceCompaniesBycompanyId = new MatTableDataSource<CompaniesByIdModuleModule>();


  constructor() { }

  ngAfterViewInit() {
    // console.log(JSON.stringify(dataSourceCompaniesBycompanyId))
  }

}
