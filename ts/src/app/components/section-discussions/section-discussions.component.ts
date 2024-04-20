import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import CreateTopic from 'src/app/interfaces/createTopic.interface';
import { CardTopicOverlayComponent } from '../card-topic-overlay/card-topic-overlay.component';

@Component({
  selector: 'app-section-discussions',
  templateUrl: './section-discussions.component.html',
  styleUrls: ['./section-discussions.component.scss']
})
export class SectionDiscussionsComponent implements OnInit {
  @ViewChild('appCardTopicOverlay', { read: ViewContainerRef }) appCardTopicOverlay: ViewContainerRef | undefined;
  public topicCards: Array<CardTopicOverlayComponent> = []
  constructor() {}

  ngOnInit(): void {
  }


  onRenderNewTopic(topic: CreateTopic): void{
    const newCard:CardTopicOverlayComponent = new CardTopicOverlayComponent()

    newCard.id = (this.topicCards.length + 1).toString()
    newCard.subject = topic.subject
    newCard.content = topic.content
  
    this.topicCards.unshift(newCard)
  }
}
