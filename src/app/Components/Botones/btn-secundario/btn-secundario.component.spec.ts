import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnSecundarioComponent } from './btn-secundario.component';

describe('BtnSecundarioComponent', () => {
  let component: BtnSecundarioComponent;
  let fixture: ComponentFixture<BtnSecundarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BtnSecundarioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BtnSecundarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
