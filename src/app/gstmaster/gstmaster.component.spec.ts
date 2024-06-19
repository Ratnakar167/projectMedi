import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GstmasterComponent } from './gstmaster.component';

describe('GstmasterComponent', () => {
  let component: GstmasterComponent;
  let fixture: ComponentFixture<GstmasterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GstmasterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GstmasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
