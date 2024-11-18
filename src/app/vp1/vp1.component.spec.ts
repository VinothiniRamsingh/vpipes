import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Vp1Component } from './vp1.component';

describe('Vp1Component', () => {
  let component: Vp1Component;
  let fixture: ComponentFixture<Vp1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Vp1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Vp1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
