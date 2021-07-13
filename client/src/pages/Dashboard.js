import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { GET_ME } from '../utils/queries';
import Auth from '../utils/auth';
import PostForm from '../components/PostForm';
import AttendingList from '../components/AttendingList';
import MyPosts from '../components/MyPosts';

const Dashboard = () => {
  // we need a get Me query
  const { data } = useQuery(GET_ME);
  // console.log('data', data)
  const meData = data?.me || {};
  const myPosts = data?.me.posts;
  // console.log('myPosts dashboard', myPosts);

  const loggedIn = Auth.loggedIn();
  if(!loggedIn) {
    window.location.assign('/login');
  }
// console.log('line 18', {data});
  return (
    <>
    <section className="container">
      <div className="row dashboard-posts">
        <PostForm />
      </div>
      <div >
      <MyPosts 
        myPosts={myPosts} 
      />
      </div>
        <h5 className="main-title text-center">--Your Plans--</h5>
    </section>
    <section className="container">  
      <AttendingList events={meData.attending}/>
    </section>

    </>
  )
};
export default Dashboard;