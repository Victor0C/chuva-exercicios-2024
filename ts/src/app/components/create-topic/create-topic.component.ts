import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-create-topic',
  templateUrl: './create-topic.component.html',
  styleUrls: ['./create-topic.component.scss']
})
export class CreateTopicComponent implements OnInit {
  @ViewChild('myElement') myElement: ElementRef | undefined;
  @Output() alert: EventEmitter<any> = new EventEmitter()
  
  constructor() { }

  public ngOnInit(): void { }
  
  public newTopic(): void {
    this.alert.emit()
  }
}
