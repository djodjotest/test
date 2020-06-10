import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SousComposantComponent } from './sous-composant.component';

describe('SousComposantComponent', () => {
  let component: SousComposantComponent;
  let fixture: ComponentFixture<SousComposantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SousComposantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SousComposantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
