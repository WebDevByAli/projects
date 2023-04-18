import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableOfficesComponent } from './table-offices.component';

describe('TableOfficesComponent', () => {
  let component: TableOfficesComponent;
  let fixture: ComponentFixture<TableOfficesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableOfficesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableOfficesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
