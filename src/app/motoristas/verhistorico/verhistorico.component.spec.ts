import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerhistoricoComponent } from './verhistorico.component';

describe('VerhistoricoComponent', () => {
  let component: VerhistoricoComponent;
  let fixture: ComponentFixture<VerhistoricoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerhistoricoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerhistoricoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
