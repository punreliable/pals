import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SinglePalComponent } from './single-pal.component';

describe('SinglePalComponent', () => {
  let component: SinglePalComponent;
  let fixture: ComponentFixture<SinglePalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SinglePalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SinglePalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
