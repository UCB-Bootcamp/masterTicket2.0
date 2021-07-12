import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { GET_ME } from '../utils/queries';
import Auth from '../utils/auth';
import PostForm from '../components/PostForm';
import AttendingList from '../components/AttendingList';

const Dashboard = () => {
  // we need a get Me query
  const { data } = useQuery(GET_ME);
  
  const meData = data?.me || {}
  const loggedIn = Auth.loggedIn();
  if(!loggedIn) {
    window.location.assign('/login');
  }

  return (
    <>
      <PostForm />
      <section className="container">
        <h5 className="main-title text-center">--Your Plans--</h5>
        <AttendingList events={meData.attending}/>
      </section>
    </>
  )
};
export default Dashboard;