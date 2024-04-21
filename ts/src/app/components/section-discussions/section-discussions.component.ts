import { Component, OnInit } from '@angular/core';
import CreateTopic from 'src/app/interfaces/createTopic.interface';
import { CardTopicOverlayComponent } from '../card-topic-overlay/card-topic-overlay.component';

@Component({
  selector: 'app-section-discussions',
  templateUrl: './section-discussions.component.html',
  styleUrls: ['./section-discussions.component.scss']
})
export class SectionDiscussionsComponent implements OnInit {
  public topicCards: Array<CardTopicOverlayComponent> = []
  renderCreateTopic = true
  renderFillTopic = false
  renderTopicCreated = false

  constructor() { }

  public ngOnInit(): void { }

  public onRenderNewTopic(topic: CreateTopic): void {
    console.log(topic)
    const newCard:CardTopicOverlayComponent = new CardTopicOverlayComponent();
    
    newCard.id = (this.topicCards.length + 1).toString();
    newCard.subject = topic.subject;
    newCard.content = topic.content;
  
    this.topicCards.unshift(newCard);

    this.renderTopicCreated = true
    this.renderFillTopic = false
  }

  onComponentFillTopic(){
    this.renderCreateTopic = false;
    this.renderFillTopic = true;
    this.renderTopicCreated && (this.renderTopicCreated = false);
  }
}
