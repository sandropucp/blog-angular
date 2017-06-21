import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from './admin.component'
import { UserListComponent } from './user-list/user-list.component'
import { UserDetailComponent } from './user-detail/user-detail.component'
import { StoryDetailComponent } from './story-detail/story-detail.component';
import { StoryListComponent } from './story-list/story-list.component';

const adminRoutes: Routes = [
    { path: '', component: AdminComponent },
    { path: '', component: AdminComponent,
      children: [
          { path: 'users', component: UserListComponent },
          { path: 'users/:id', component: UserDetailComponent },
          { path: 'stories', component: StoryListComponent },
          { path: 'stories/:id', component: StoryDetailComponent }
        ]
    }
];

export const AdminRouting = RouterModule.forChild(adminRoutes);
