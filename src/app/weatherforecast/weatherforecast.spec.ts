import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Weatherforecast } from './weatherforecast';

describe('Weatherforecast', () => {
  let component: Weatherforecast;
  let fixture: ComponentFixture<Weatherforecast>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Weatherforecast],
    }).compileComponents();

    fixture = TestBed.createComponent(Weatherforecast);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
