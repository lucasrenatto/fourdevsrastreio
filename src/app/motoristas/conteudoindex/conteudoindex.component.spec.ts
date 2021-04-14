import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConteudoindexComponent } from './conteudoindex.component';

describe('ConteudoindexComponent', () => {
  let component: ConteudoindexComponent;
  let fixture: ComponentFixture<ConteudoindexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConteudoindexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConteudoindexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
