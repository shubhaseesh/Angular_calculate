import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SceintificComponent } from './sceintific.component';

describe('SceintificComponent', () => {
  let component: SceintificComponent;
  let fixture: ComponentFixture<SceintificComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SceintificComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SceintificComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
