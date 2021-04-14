import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarmotoristasComponent } from './consultarmotoristas.component';

describe('ConsultarmotoristasComponent', () => {
  let component: ConsultarmotoristasComponent;
  let fixture: ComponentFixture<ConsultarmotoristasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultarmotoristasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultarmotoristasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
