import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableQuotationLineTreatmentsComponent } from './table-quotation-line-treatments.component';

describe('TableQuotationLineTreatmentsComponent', () => {
  let component: TableQuotationLineTreatmentsComponent;
  let fixture: ComponentFixture<TableQuotationLineTreatmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableQuotationLineTreatmentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableQuotationLineTreatmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
