import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionDiscussionsComponent } from './section-discussions.component';

describe('SectionDiscussionsComponent', () => {
  let component: SectionDiscussionsComponent;
  let fixture: ComponentFixture<SectionDiscussionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionDiscussionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionDiscussionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
