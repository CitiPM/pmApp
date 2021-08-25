import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PastNetWorthComponent } from './past-net-worth.component';

describe('PastNetWorthComponent', () => {
  let component: PastNetWorthComponent;
  let fixture: ComponentFixture<PastNetWorthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PastNetWorthComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PastNetWorthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
