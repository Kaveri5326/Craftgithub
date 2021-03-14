import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SationaryComponent } from './sationary.component';

describe('SationaryComponent', () => {
  let component: SationaryComponent;
  let fixture: ComponentFixture<SationaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SationaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SationaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
