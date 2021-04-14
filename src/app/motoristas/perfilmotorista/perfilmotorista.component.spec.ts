import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilmotoristaComponent } from './perfilmotorista.component';

describe('PerfilmotoristaComponent', () => {
  let component: PerfilmotoristaComponent;
  let fixture: ComponentFixture<PerfilmotoristaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerfilmotoristaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfilmotoristaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
