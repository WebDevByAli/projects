import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableInvoiceOrderLinesComponent } from './table-invoice-order-lines.component';

describe('TableInvoiceOrderLinesComponent', () => {
  let component: TableInvoiceOrderLinesComponent;
  let fixture: ComponentFixture<TableInvoiceOrderLinesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableInvoiceOrderLinesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableInvoiceOrderLinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
