import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaralertaComponent } from './consultaralerta.component';

describe('ConsultaralertaComponent', () => {
  let component: ConsultaralertaComponent;
  let fixture: ComponentFixture<ConsultaralertaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultaralertaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultaralertaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
