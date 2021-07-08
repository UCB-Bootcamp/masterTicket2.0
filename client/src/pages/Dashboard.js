import React from 'react';
import PostForm from '../components/PostForm';
import Attending from '../components/Attending';

const Dashboard = () => {
  // we need a get Me query
  return (
    <>
      <PostForm />
      <section className="container">
        <h5 class="main-title text-center">--Your Plans--</h5>
        <Attending />
      </section>
    </>
  )
};
export default Dashboard;