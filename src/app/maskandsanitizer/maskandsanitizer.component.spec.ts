import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaskandsanitizerComponent } from './maskandsanitizer.component';

describe('MaskandsanitizerComponent', () => {
  let component: MaskandsanitizerComponent;
  let fixture: ComponentFixture<MaskandsanitizerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaskandsanitizerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaskandsanitizerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
