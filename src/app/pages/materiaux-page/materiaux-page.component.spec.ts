import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MateriauxPageComponent } from './materiaux-page.component';

describe('MateriauxPageComponent', () => {
  let component: MateriauxPageComponent;
  let fixture: ComponentFixture<MateriauxPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MateriauxPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MateriauxPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
