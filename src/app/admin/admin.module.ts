import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { AdminComponent } from './admin.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { StoryListComponent } from './story-list/story-list.component';
import { StoryDetailComponent } from './story-detail/story-detail.component';
import { AdminRouting } from './admin.route';
import { SideNavComponent } from './side-nav/side-nav.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    AdminRouting
  ],
  declarations: [
    AdminComponent, 
    UserListComponent, 
    UserDetailComponent, 
    StoryListComponent, 
    StoryDetailComponent, 
    SideNavComponent]
})
export default class AdminModule { }
