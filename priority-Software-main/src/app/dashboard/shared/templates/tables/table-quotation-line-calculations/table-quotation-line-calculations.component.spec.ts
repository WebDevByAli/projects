import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableQuotationLineCalculationsComponent } from './table-quotation-line-calculations.component';

describe('TableQuotationLineCalculationsComponent', () => {
  let component: TableQuotationLineCalculationsComponent;
  let fixture: ComponentFixture<TableQuotationLineCalculationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableQuotationLineCalculationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableQuotationLineCalculationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
