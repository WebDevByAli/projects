import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableDeliveryAddressesComponent } from './table-delivery-addresses.component';

describe('TableDeliveryAddressesComponent', () => {
  let component: TableDeliveryAddressesComponent;
  let fixture: ComponentFixture<TableDeliveryAddressesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableDeliveryAddressesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableDeliveryAddressesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
