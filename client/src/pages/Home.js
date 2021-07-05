import React from 'react';
import PostList from '../components/PostList';
// import { QUERY_POSTS } from '../utils/queries';
// import { useQuery } from '@apollo/react-hooks';


const Home = () => {
  // const { data } = useQuery(QUERY_POSTS);



  return (
    <main>
      <PostList 
        // posts={posts}
        // title = "==new events=="
      />
    </main>

  );
};

export default Home;