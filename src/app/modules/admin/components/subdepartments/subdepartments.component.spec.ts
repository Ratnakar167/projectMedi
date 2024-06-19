import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubdepartmentsComponent } from './subdepartments.component';

describe('SubdepartmentsComponent', () => {
  let component: SubdepartmentsComponent;
  let fixture: ComponentFixture<SubdepartmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubdepartmentsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubdepartmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
