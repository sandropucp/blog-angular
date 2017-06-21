import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AppRoutes } from './app.route';
import { HttpService } from './common/services/http.service';
import { StoryService } from './common/services/story.service';
import { UserService } from './common/services/user.service';

import { SharedModule } from './shared/shared.module';
import { HomeModule } from './home/home.module';
import { ComponentComponent } from './component/component.component';
//import { AdminModule } from './admin/admin.module';

@NgModule({
  declarations: [
    AppComponent,
    ComponentComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(AppRoutes),    
    HttpModule,    
    SharedModule,
    HomeModule
  ],
  providers: [
    HttpService,
    StoryService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
