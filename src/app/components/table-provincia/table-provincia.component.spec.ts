import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableProvinciaComponent } from './table-provincia.component';

describe('TableProvinciaComponent', () => {
  let component: TableProvinciaComponent;
  let fixture: ComponentFixture<TableProvinciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableProvinciaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableProvinciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
