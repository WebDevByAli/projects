import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableInvoiceOrdersComponent } from './table-invoice-orders.component';

describe('TableInvoiceOrdersComponent', () => {
  let component: TableInvoiceOrdersComponent;
  let fixture: ComponentFixture<TableInvoiceOrdersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableInvoiceOrdersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableInvoiceOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
