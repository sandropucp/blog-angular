import { CommentModel } from './comment.model';
import { UserModel } from './user.model';
import { TagModel } from './tag.model';

export interface StoryModel {
    _id: number;
    author: UserModel;
    title: string;
    body: string;
    comments: Array<CommentModel>;
    tags: [TagModel];
    createdAt: Date;
}
