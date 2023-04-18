import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableAddressesComponent } from './table-addresses.component';

describe('TableAddressesComponent', () => {
  let component: TableAddressesComponent;
  let fixture: ComponentFixture<TableAddressesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableAddressesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableAddressesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
