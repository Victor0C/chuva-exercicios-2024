import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FillTopicComponent } from './fill-topic.component';

describe('FillTopicComponent', () => {
  let component: FillTopicComponent;
  let fixture: ComponentFixture<FillTopicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FillTopicComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FillTopicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
