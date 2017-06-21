import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { StoryModel } from '../../common/models/story.model';
import { TagModel } from '../../common/models/tag.model';
import { StoryService } from '../../common/services/story.service';

import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {
  stories: Array<StoryModel> = [];
  tags: Array<TagModel> = [];

  items: Array<string>;
  term$ = new Subject<string>();

  constructor(private storyService: StoryService, private router: Router) { }

  ngOnInit() {
    this.storyService.getStories()
      .subscribe(stories => this.stories = stories);

    this.storyService.getTags()
      .subscribe(tags => this.tags = tags);

    this.storyService.search(this.term$)
      .subscribe(stories => this.stories = stories);
  }
}
