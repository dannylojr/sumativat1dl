import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnNightComponent } from './btn-night.component';

describe('BtnNightComponent', () => {
  let component: BtnNightComponent;
  let fixture: ComponentFixture<BtnNightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BtnNightComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BtnNightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
