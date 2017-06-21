import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SharedComponent } from './shared.component';
import { FooterComponent } from './footer/footer.component';
import { NavMainComponent } from './nav-main/nav-main.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HttpService } from '../common/services/http.service';
import { StoryService } from '../common/services/story.service';
import { UserService } from '../common/services/user.service';

@NgModule({
    imports: [
        CommonModule,
        RouterModule, //important for RouterLink to work
        FormsModule,
        ReactiveFormsModule
    ],
    declarations: [
        SharedComponent,
        FooterComponent,
        NavMainComponent,
        LoginComponent,
        RegisterComponent
    ],
    exports: [
        CommonModule,
        RouterModule,
        FormsModule,
        ReactiveFormsModule,
        FooterComponent,
        NavMainComponent,
        LoginComponent,
        RegisterComponent
    ],
    providers: [HttpService, StoryService, UserService]
})
export class SharedModule { }
