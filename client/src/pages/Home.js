import React from 'react';
import PostList from '../components/PostList';
import Featured from '../components/Featured';
import { QUERY_POSTS } from '../utils/queries';
import { useQuery } from '@apollo/react-hooks';

const Home = () => {
  const { loading, data } = useQuery(QUERY_POSTS);
  const posts = data?.posts || [];
  console.log('posts', posts);

  return (
    <main>
      <PostList 
        posts={posts}
        title = "==new events=="
      />
      <Featured />
    </main>

  );
};

export default Home;