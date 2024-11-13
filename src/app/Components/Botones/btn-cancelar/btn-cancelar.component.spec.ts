import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnCancelarComponent } from './btn-cancelar.component';

describe('BtnCancelarComponent', () => {
  let component: BtnCancelarComponent;
  let fixture: ComponentFixture<BtnCancelarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BtnCancelarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BtnCancelarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
