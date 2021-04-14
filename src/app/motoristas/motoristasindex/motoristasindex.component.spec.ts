import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MotoristasindexComponent } from './motoristasindex.component';

describe('MotoristasindexComponent', () => {
  let component: MotoristasindexComponent;
  let fixture: ComponentFixture<MotoristasindexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MotoristasindexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MotoristasindexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
