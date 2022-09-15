import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeminarformComponent } from './seminarform.component';

describe('SeminarformComponent', () => {
  let component: SeminarformComponent;
  let fixture: ComponentFixture<SeminarformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeminarformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeminarformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
