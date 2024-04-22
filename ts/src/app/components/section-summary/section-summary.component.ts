import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-summary',
  templateUrl: './section-summary.component.html',
  styleUrls: ['./section-summary.component.scss']
})
export class SectionSummaryComponent implements OnInit {
  renderMore: boolean = false

  constructor() { }

  public ngOnInit(): void { }

  public viewMore(): void {
    this.renderMore = !this.renderMore
  }
}
