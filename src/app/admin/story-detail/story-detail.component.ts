import { StoryService } from './../../common/services/story.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { StoryModel } from './../../common/models/story.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-story-detail',
  templateUrl: './story-detail.component.html',
  styleUrls: ['./story-detail.component.css']
})
export class StoryDetailComponent implements OnInit {
  story: StoryModel;
  storyId: string;

  storyForm: FormGroup;
  updateFailed: boolean;
  titleCtrl: FormControl;  
  bodyCtrl: FormControl;
  tagsCtrl: FormControl;

  constructor(private fb: FormBuilder, private router: Router, private route: ActivatedRoute,
    private storyService: StoryService) { }

  ngOnInit() {
    this.storyId = this.route.snapshot.params['id'];

    this.titleCtrl = this.fb.control('', Validators.compose([
      Validators.required,
      Validators.minLength(3)
    ]));
    this.bodyCtrl = this.fb.control('', Validators.compose([
      Validators.required,
      Validators.minLength(3)
    ]));
    this.tagsCtrl = this.fb.control('');

    this.storyForm = this.fb.group({
      title: this.titleCtrl,
      body: this.bodyCtrl,
      tags: this.tagsCtrl
    });

    this.storyService.getStory(this.storyId)
      .subscribe(story => {        
        this.story = story;
        this.titleCtrl.setValue(this.story.title);
        this.bodyCtrl.setValue(this.story.body);
        this.tagsCtrl.setValue(this.story.tags);
      });
  }

  update() {
    this.storyService.updateStory(
      this.storyId,
      this.storyForm.value.title,
      this.storyForm.value.body,
      this.storyForm.value.tags
    ).subscribe(
      () => this.router.navigate(['/admin/stories']),
      () => this.updateFailed = true
      );
  }
}
