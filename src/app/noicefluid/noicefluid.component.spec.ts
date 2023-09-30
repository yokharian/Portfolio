import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoicefluidComponent } from './noicefluid.component';

describe('NoicefluidComponent', () => {
  let component: NoicefluidComponent;
  let fixture: ComponentFixture<NoicefluidComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NoicefluidComponent]
    });
    fixture = TestBed.createComponent(NoicefluidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
