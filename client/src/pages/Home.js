import React from 'react';
import PostList from '../components/PostList';
import { QUERY_POSTS } from '../utils/queries';
import { useQuery } from '@apollo/react-hooks';

const Home = () => {
  const { data } = useQuery(QUERY_POSTS);
  const posts = data?.posts || [];

  return (
    <main>
      <section className="container">
      <h5 className="main-title text-center pb-3">--new events--</h5>
        <div className="">
          
          <div >
            <PostList
              posts={posts}
            ></PostList>
          </div>
        </div>
      </section>
      <section className="pt-4">
        <Featured />
      </section>
    </main >

  );
};

export default Home;