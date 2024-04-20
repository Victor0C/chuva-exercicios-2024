import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopicCreatedComponent } from './topic-created.component';

describe('TopicCreatedComponent', () => {
  let component: TopicCreatedComponent;
  let fixture: ComponentFixture<TopicCreatedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopicCreatedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopicCreatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
