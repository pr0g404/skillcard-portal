import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSkillcardComponent } from './create-skillcard.component';

describe('CreateSkillcardComponent', () => {
  let component: CreateSkillcardComponent;
  let fixture: ComponentFixture<CreateSkillcardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateSkillcardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateSkillcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
