import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-topic-overlay',
  templateUrl: './card-topic-overlay.component.html',
  styleUrls: ['./card-topic-overlay.component.scss']
})
export class CardTopicOverlayComponent implements OnInit {
  @Input() public id: string = ''
  @Input() public subject: string = ''
  @Input() public author: string = 'Carlos Henrique Santos'
  @Input() public content: string = ''
  
  constructor() {}

  ngOnInit(): void {

  }

}
