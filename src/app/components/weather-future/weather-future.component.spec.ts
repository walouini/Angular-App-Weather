import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherFutureComponent } from './weather-future.component';

describe('WeatherFutureComponent', () => {
  let component: WeatherFutureComponent;
  let fixture: ComponentFixture<WeatherFutureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeatherFutureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherFutureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
