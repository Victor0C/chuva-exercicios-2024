import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-topic-created',
  templateUrl: './topic-created.component.html',
  styleUrls: ['./topic-created.component.scss']
})
export class TopicCreatedComponent implements OnInit {
  @Output() alert: EventEmitter<any> = new EventEmitter()
  
  constructor() { }

  public ngOnInit(): void { }

  public createTopic(): void {
    this.alert.emit()
  }
}
