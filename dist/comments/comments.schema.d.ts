import { Document, Types } from 'mongoose';
export declare class Comments extends Document {
    author: string;
    contents: string;
    likeCount: number;
    info: Types.ObjectId;
}
export declare const CommentsSchema: import("mongoose").Schema<Comments, import("mongoose").Model<Comments, any, any>, {}>;
