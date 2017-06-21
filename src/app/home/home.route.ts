import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home.component'
import { StoryListComponent } from './story-list/story-list.component'
import { StoryDetailComponent } from './story-detail/story-detail.component'

const homeRoutes: Routes = [
  { path: '', component: HomeComponent,   
    children: [
      { path: '',       
        children: [
          { path: '', component: StoryListComponent  },                             
          { path: 'stories', component: StoryListComponent },
          { path: 'stories/:id', component: StoryDetailComponent }
        ]
      }
    ]
  }
];

export const HomeRouting = RouterModule.forChild(homeRoutes);
