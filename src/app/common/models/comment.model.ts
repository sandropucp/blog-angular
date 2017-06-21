import { UserModel } from './user.model';

export interface CommentModel {
    _id: number;
    author: UserModel;    
    body: string;
    createdAt: Date;
}
