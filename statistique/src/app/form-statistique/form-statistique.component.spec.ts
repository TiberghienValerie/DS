import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormStatistiqueComponent } from './form-statistique.component';

describe('FormStatistiqueComponent', () => {
  let component: FormStatistiqueComponent;
  let fixture: ComponentFixture<FormStatistiqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormStatistiqueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormStatistiqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
