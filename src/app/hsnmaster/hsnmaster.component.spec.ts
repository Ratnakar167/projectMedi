import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HsnmasterComponent } from './hsnmaster.component';

describe('HsnmasterComponent', () => {
  let component: HsnmasterComponent;
  let fixture: ComponentFixture<HsnmasterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HsnmasterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HsnmasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
