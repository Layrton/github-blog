import { useState, useCallback, useEffect } from 'react';
import { api } from '../../../lib/axios';
import { Post } from './Post';
import { SearchForm } from './SearchForm';
import { PostsContainer, PostsList } from './styles';

const username = 'layrton';
const repoName = 'github-blog';

export interface IPost {
  title: string;
  body: string;
  created_at: string;
  number: number;
  html_url: string;
  comments: number;
  user: {
    login: string;
  };
}

export function Posts() {
  const [posts, setPosts] = useState<IPost[]>([]);

  const getPosts = useCallback(async (query: string = '') => {
    try {
      const response = await api.get(
        `/search/issues?q=${query}%20repo:${username}/${repoName}`
      );
      setPosts(response.data.items);
    } catch (err) {
      console.log(err);
    }
  }, []);

  useEffect(() => {
    getPosts();
  }, [getPosts]);

  return (
    <PostsContainer>
      <SearchForm postsLength={posts.length} getPosts={getPosts} />
      <PostsList>
        {posts.map((post) => (
          <Post key={post.number} post={post} />
        ))}
      </PostsList>
    </PostsContainer>
  );
}
