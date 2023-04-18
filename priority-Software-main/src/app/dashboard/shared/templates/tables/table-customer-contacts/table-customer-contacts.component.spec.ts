import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableCustomerContactsComponent } from './table-customer-contacts.component';

describe('TableCustomerContactsComponent', () => {
  let component: TableCustomerContactsComponent;
  let fixture: ComponentFixture<TableCustomerContactsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableCustomerContactsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableCustomerContactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
