import IPost from "./IPost";

export type PostState = {
    posts: IPost[];
    currentPost?: IPost;
};