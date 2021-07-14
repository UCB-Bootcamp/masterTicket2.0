import React from 'react';
import PostList from '../components/PostList';
import { QUERY_POSTS } from '../utils/queries';
import { useQuery } from '@apollo/react-hooks';

const Home = () => {
  const { data } = useQuery(QUERY_POSTS);
  const posts = data?.posts || [];
console.log(posts);
  return (
    <main>
      <section className="container">
        <div className="row">
          <h5 className="main-title text-center">--new events--</h5>
          <div className="cards col-md-6 col-lg-3 ">
            <PostList
              posts={posts}
            ></PostList>
          </div>
        </div>
      </section>
    </main >

  );
};

export default Home;