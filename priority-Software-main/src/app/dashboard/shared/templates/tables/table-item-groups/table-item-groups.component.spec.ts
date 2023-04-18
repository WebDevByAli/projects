import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableItemGroupsComponent } from './table-item-groups.component';

describe('TableItemGroupsComponent', () => {
  let component: TableItemGroupsComponent;
  let fixture: ComponentFixture<TableItemGroupsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableItemGroupsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableItemGroupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
