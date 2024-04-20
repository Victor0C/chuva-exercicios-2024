import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { MyHeaderComponent } from './components/header/header.component';
import { ContentComponent } from './components/content/content.component';
import { CardTopicComponent } from './components/card-topic/card-topic.component';
import { CardTopicOverlayComponent } from './components/card-topic-overlay/card-topic-overlay.component';
import { SectionStartComponent } from './components/section-start/section-start.component';
import { SectionSummaryComponent } from './components/section-summary/section-summary.component';
import { SectionDiscussionsComponent } from './components/section-discussions/section-discussions.component';
import { CreateTopicComponent } from './components/create-topic/create-topic.component';
import { FillTopicComponent } from './components/fill-topic/fill-topic.component';
import { TopicCreatedComponent } from './components/topic-created/topic-created.component';
import { TopicCommentComponent } from './components/topic-comment/topic-comment.component';
import { FooterComponent } from './components/footer/footer.component';
import { MenuToggleComponent } from './components/menu-toggle/menu-toggle.component';

@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent,
    MyHeaderComponent,
    ContentComponent,
    CardTopicComponent,
    CardTopicOverlayComponent,
    SectionStartComponent,
    SectionSummaryComponent,
    SectionDiscussionsComponent,
    CreateTopicComponent,
    FillTopicComponent,
    TopicCreatedComponent,
    TopicCommentComponent,
    FooterComponent,
    MenuToggleComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
