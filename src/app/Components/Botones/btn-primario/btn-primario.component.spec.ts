import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnPrimarioComponent } from './btn-primario.component';

describe('BtnPrimarioComponent', () => {
  let component: BtnPrimarioComponent;
  let fixture: ComponentFixture<BtnPrimarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BtnPrimarioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BtnPrimarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
