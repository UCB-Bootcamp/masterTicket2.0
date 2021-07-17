import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { GET_ME } from '../utils/queries';
import Auth from '../utils/auth';
import PostForm from '../components/PostForm';
import AttendingList from '../components/AttendingList';
import MyPosts from '../components/MyPosts';

const Dashboard = () => {

  const { data } = useQuery(GET_ME);
  console.log('data', data);
  const meData = data?.me || {};
  const myPosts = data?.me.posts;
  const username = data?.me.username;
  const loggedIn = Auth.loggedIn();

  if(!loggedIn) {
    window.location.assign('/login');
  }

  return (
    <>
      <section className="row dashboard-posts">
        <div className="col new-post-form">
          <PostForm 
            username={username}
          />
        </div>
        <div className="col new-post-form">
        <MyPosts 
          myPosts={myPosts} 
        />
        </div>
      </section>
      <section className="container">  
      <h5 className="main-title text-center">--Your Plans--</h5>
        <AttendingList events={meData.attending}/>
      </section>
    </>
  )
};
export default Dashboard;