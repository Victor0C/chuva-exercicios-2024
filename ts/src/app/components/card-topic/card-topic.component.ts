import { Component, Input, OnInit } from '@angular/core';
import TopicComment from 'src/app/interfaces/topicComment.interface';
import commentsMock from 'src/app/mock/comments.mock';

@Component({
  selector: 'app-card-topic',
  templateUrl: './card-topic.component.html',
  styleUrls: ['./card-topic.component.scss']
})
export class CardTopicComponent implements OnInit {
  @Input() public id: string = '';
  @Input() public subject: string = '';
  @Input() public author: string = 'Carlos Henrique Santos';
  @Input() public content: string = '';
  @Input() public likes: number = 0;
  @Input() public comments: Array<TopicComment> = commentsMock;
  public viewComments: boolean = true;
  
  constructor() {}

  public ngOnInit(): void {
  }

  public like(): void{
    this.likes++;
    console.log(this.likes);
  }

  public seeComments(): void{
    this.viewComments = !this.viewComments;
  }

}
