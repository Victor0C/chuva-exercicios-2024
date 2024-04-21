import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-topic-created',
  templateUrl: './topic-created.component.html',
  styleUrls: ['./topic-created.component.scss']
})
export class TopicCreatedComponent implements OnInit {

  constructor() { }

  public ngOnInit(): void { }

  public createTopic(): void {
    const divCreateTopic = document.getElementById('create-topic') as HTMLElement;
    const divFillTopic = document.getElementById('fill-topic') as HTMLElement;
    const divCreatedTopic = document.getElementById('topic-created') as HTMLElement;

    divCreateTopic.style.display = 'none';
    divFillTopic.style.display = 'flex';

    divCreatedTopic.style.display === 'flex' && (divCreatedTopic.style.display = 'none');
  }
}
