import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableCustomerOrdersComponent } from './table-customer-orders.component';

describe('TableCustomerOrdersComponent', () => {
  let component: TableCustomerOrdersComponent;
  let fixture: ComponentFixture<TableCustomerOrdersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableCustomerOrdersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableCustomerOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
