import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-fill-topic',
  templateUrl: './fill-topic.component.html',
  styleUrls: ['./fill-topic.component.scss']
})
export class FillTopicComponent implements OnInit {
  @Output() topic: EventEmitter<any> = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  createdTopic(event: Event): void {
    const divCreatedTopic = document.getElementById('topic-created') as HTMLElement;
    const divFillTopic = document.getElementById('fill-topic') as HTMLElement;
    const form = new FormData(event.target as HTMLFormElement)
    
    event.preventDefault();
    (event.target as HTMLFormElement).reset();

    divCreatedTopic.style.display = 'flex';
    divFillTopic.style.display = 'none';
   
    this.topic.emit({
      subject: form.get('subject') as string,
      content: form.get('textarea') as string
    });
  }
  
  cancellCreateTopic(): void {
    const divCreateTopic = document.getElementById('create-topic') as HTMLElement;
    const divFillTopic = document.getElementById('fill-topic') as HTMLElement;
    const divCreatedTopic = document.getElementById('topic-created') as HTMLElement;

    divCreateTopic.style.display = 'flex';
    divFillTopic.style.display = 'none';

    if (divCreatedTopic.style.display === 'flex') {
      divCreatedTopic.style.display = 'none';
    }
  }

}
