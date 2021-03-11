import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarmotoristasComponent } from './cadastrarmotoristas.component';

describe('CadastrarmotoristasComponent', () => {
  let component: CadastrarmotoristasComponent;
  let fixture: ComponentFixture<CadastrarmotoristasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastrarmotoristasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastrarmotoristasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
