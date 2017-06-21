import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './home.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { StoryListComponent } from './story-list/story-list.component';
import { StoryDetailComponent } from './story-detail/story-detail.component';
import { HomeRouting } from './home.route';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    HomeRouting
  ],
  declarations: [
    HomeComponent, 
    SideNavComponent, 
    StoryListComponent, 
    StoryDetailComponent
  ]
})
export class HomeModule { }
