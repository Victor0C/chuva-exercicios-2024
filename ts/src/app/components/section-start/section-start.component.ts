import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-start',
  templateUrl: './section-start.component.html',
  styleUrls: ['./section-start.component.scss']
})
export class SectionStartComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  playVideo(){
    const video = document.getElementById('video') as HTMLVideoElement;
    const overlay = document.getElementById('overlay-video') as HTMLElement;

    overlay.style.display='none'
    video.play()

  }

}
