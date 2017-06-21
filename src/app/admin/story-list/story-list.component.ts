import { StoryService } from './../../common/services/story.service';
import { StoryModel } from './../../common/models/story.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-story-list',
  templateUrl: './story-list.component.html',
  styleUrls: ['./story-list.component.css']
})
export class StoryListComponent implements OnInit {
  stories: Array<StoryModel> = [];

  constructor(private storyService: StoryService  ) { }

  ngOnInit() {
    console.log('Stories Admin Comp');

    this.storyService.getStories()
      .subscribe(stories => {
        this.stories = stories;
        console.log(this.stories);
      });
  }

  delete(story) {
    console.log(story)
  }
}