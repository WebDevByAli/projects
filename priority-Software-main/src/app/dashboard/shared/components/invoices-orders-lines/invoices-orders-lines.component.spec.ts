import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoicesOrdersLinesComponent } from './invoices-orders-lines.component';

describe('InvoicesOrdersLinesComponent', () => {
  let component: InvoicesOrdersLinesComponent;
  let fixture: ComponentFixture<InvoicesOrdersLinesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvoicesOrdersLinesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InvoicesOrdersLinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
