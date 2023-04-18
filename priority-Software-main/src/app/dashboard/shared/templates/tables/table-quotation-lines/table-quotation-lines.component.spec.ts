import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableQuotationLinesComponent } from './table-quotation-lines.component';

describe('TableQuotationLinesComponent', () => {
  let component: TableQuotationLinesComponent;
  let fixture: ComponentFixture<TableQuotationLinesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableQuotationLinesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableQuotationLinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
