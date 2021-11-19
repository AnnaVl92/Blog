import { PostState } from "../types/PostState";
import { createSelector } from '@reduxjs/toolkit';

const allPosts = (state: PostState) => state.posts;
const visiblePostsAmount = (state: PostState) => state.visiblePostsAmount;

export const visiblePosts = createSelector(
    [visiblePostsAmount, allPosts],
    (visiblePostsAmount, posts) => {
        return posts.slice(0, visiblePostsAmount);
    }
)