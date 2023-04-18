import { Injectable } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { CompaniesModuleModule } from '../Modules/companies-module.module';


@Injectable({
  providedIn: 'root'
})
export class ServiceApiService {
  subscribe!: Subscription;
  data!: Observable<number>;

  dataSourceCompanies = new Observable<CompaniesModuleModule>();
  dataSource !: any;



  constructor() {
  }


  getId(num: number) {
    this.data = new Observable(ob => {
      ob.next(num);
    })
    console.log(this.data);
    return this.data;
  }



}
