import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableCustomerOrderLinesComponent } from './table-customer-order-lines.component';

describe('TableCustomerOrderLinesComponent', () => {
  let component: TableCustomerOrderLinesComponent;
  let fixture: ComponentFixture<TableCustomerOrderLinesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableCustomerOrderLinesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableCustomerOrderLinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
