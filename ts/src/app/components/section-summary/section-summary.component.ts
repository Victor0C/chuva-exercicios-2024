import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-summary',
  templateUrl: './section-summary.component.html',
  styleUrls: ['./section-summary.component.scss']
})
export class SectionSummaryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  viewMore(): void {
    const ellipsis = document.getElementById('ellipsis') as HTMLElement;
    const viewmore = document.getElementById('see-more') as HTMLElement;
    const btnShowMore = document.getElementById('btn-show-more') as HTMLElement;
    const btnShowLess = document.getElementById('btn-show-less') as HTMLElement;

    ellipsis.style.display = 'none';
    viewmore.style.display = 'flex';
    btnShowMore.style.display = 'none';
    btnShowLess.style.display = 'inline';
  }

  viewLess(): void {
    const ellipsis = document.getElementById('ellipsis') as HTMLElement;
    const viewmore = document.getElementById('see-more') as HTMLElement;
    const btnShowMore = document.getElementById('btn-show-more') as HTMLElement;
    const btnShowLess = document.getElementById('btn-show-less') as HTMLElement;

    ellipsis.style.display = 'inline';
    viewmore.style.display = 'none';
    btnShowMore.style.display = 'inline';
    btnShowLess.style.display = 'none';
  }

}
