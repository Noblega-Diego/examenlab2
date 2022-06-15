import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleProvinciaComponent } from './detalle-provincia.component';

describe('DetalleProvinciaComponent', () => {
  let component: DetalleProvinciaComponent;
  let fixture: ComponentFixture<DetalleProvinciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalleProvinciaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalleProvinciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
