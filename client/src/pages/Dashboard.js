import React from 'react';
import PostForm from '../components/PostForm';
import MyPosts from '../components/MyPosts';

const Dashboard = () => {
  return (
    <div className="row">
      <PostForm />
      <MyPosts />
    </div>
  )
};
export default Dashboard;