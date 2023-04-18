import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableSalesHistoryComponent } from './table-sales-history.component';

describe('TableSalesHistoryComponent', () => {
  let component: TableSalesHistoryComponent;
  let fixture: ComponentFixture<TableSalesHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableSalesHistoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableSalesHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
