import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-topic',
  templateUrl: './create-topic.component.html',
  styleUrls: ['./create-topic.component.scss']
})
export class CreateTopicComponent implements OnInit {

  constructor() { }

  public ngOnInit(): void { }
  
  public newTopic(): void {
    const divCreateTopic = document.getElementById('create-topic') as HTMLElement;
    const divFillTopic = document.getElementById('fill-topic') as HTMLElement;
    const divCreatedTopic = document.getElementById('topic-created') as HTMLElement;

    divCreateTopic.style.display = 'none';
    divFillTopic.style.display = 'flex';
 
    divCreatedTopic.style.display === 'flex' && (divCreatedTopic.style.display = 'none');
  }
}
