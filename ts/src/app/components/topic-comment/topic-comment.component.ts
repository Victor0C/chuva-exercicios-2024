import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-topic-comment',
  templateUrl: './topic-comment.component.html',
  styleUrls: ['./topic-comment.component.scss']
})
export class TopicCommentComponent implements OnInit {
  @Input() public id: string = ''
  @Input() public user: string = ''
  @Input() public content: string = ''
  @Input() public typeUser: string = ''

  constructor() { }

  public ngOnInit(): void { }
}
