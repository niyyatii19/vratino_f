import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvisoryCommiteeComponent } from './advisory-commitee.component';

describe('AdvisoryCommiteeComponent', () => {
  let component: AdvisoryCommiteeComponent;
  let fixture: ComponentFixture<AdvisoryCommiteeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdvisoryCommiteeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdvisoryCommiteeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
