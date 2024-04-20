import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardTopicOverlayComponent } from './card-topic-overlay.component';

describe('CardTopicOverlayComponent', () => {
  let component: CardTopicOverlayComponent;
  let fixture: ComponentFixture<CardTopicOverlayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardTopicOverlayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardTopicOverlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
