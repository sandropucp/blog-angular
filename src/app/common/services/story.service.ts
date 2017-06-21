import { Injectable } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { StoryModel } from '../models/story.model';
import { TagModel } from '../models/tag.model';
import { HttpService } from './http.service';

@Injectable()
export class StoryService {

  constructor(private http: HttpService) { }

  getStories(): Observable<Array<StoryModel>> {
    return this.http.get('stories');
  }

  getTags(): Observable<Array<TagModel>> {
    return this.http.get('tags');
  }

  getStoriesByTag(tag: string): Observable<Array<StoryModel>> {
    return this.http.get(`stories?tag=${tag}`);
  }

  getStory(id: string): Observable<StoryModel> {
    return this.http.get(`stories/${id}`);
  }

  search(terms: Observable<string>, debounceMs = 400) {
    return terms.debounceTime(400)
      .distinctUntilChanged()
      .switchMap(term => this.rawsearch(term));
  }

  rawsearch(term: string) {
    return this.http.get(`stories?search=${term}`);
  }

  postComment(storyid, body, author): Observable<StoryModel> {
    const postBody = { body, author };
    return this.http.post(`stories/${storyid}/comments`, postBody);
  }

  postStory(title,body,tags) {
   const storyBody = { title, body, tags};
    return this.http.post(`stories/`, storyBody);
  }

  updateStory(id,title,body, tags) {
   const storyBody = {title, body, tags};
    return this.http.put(`stories/${id}`, storyBody);
  }
}
