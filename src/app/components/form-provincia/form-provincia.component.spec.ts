import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormProvinciaComponent } from './form-provincia.component';

describe('FormProvinciaComponent', () => {
  let component: FormProvinciaComponent;
  let fixture: ComponentFixture<FormProvinciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormProvinciaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormProvinciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
