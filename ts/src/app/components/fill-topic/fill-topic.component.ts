import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-fill-topic',
  templateUrl: './fill-topic.component.html',
  styleUrls: ['./fill-topic.component.scss']
})
export class FillTopicComponent implements OnInit {
  @Output() topic: EventEmitter<any> = new EventEmitter()

  constructor() { }

  public ngOnInit(): void { }

  public createdTopic(event: Event): void {
    const divCreatedTopic = document.getElementById('topic-created') as HTMLElement;
    const divFillTopic = document.getElementById('fill-topic') as HTMLElement;
    const form = new FormData(event.target as HTMLFormElement);
    
    event.preventDefault();
    (event.target as HTMLFormElement).reset();
   
    this.topic.emit({
      subject: form.get('subject') as string,
      content: form.get('textarea') as string
    });
  }
}
