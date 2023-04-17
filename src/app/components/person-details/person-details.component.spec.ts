import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersondDetailsComponent } from './person-details.component';

describe('PersonCardComponent', () => {
  let component: PersondDetailsComponent;
  let fixture: ComponentFixture<PersondDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersondDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersondDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
