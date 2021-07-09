import React, { useState } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { GET_ME } from '../utils/queries';
import Auth from '../utils/auth';
import PostForm from '../components/PostForm';
import Attending from '../components/Attending';

const Dashboard = () => {
  const [userData, setUserData] = useState()
  // we need a get Me query
  const { loading, data } = useQuery(GET_ME);
  
  const meData = data?.me || {}
  if(meData) {
    console.log(meData);
  }
  const getUserData = async () => {
    const token = Auth.loggedIn() ? Auth.getToken() : null;
    if(!token) {
      return false;
    }
    try {
    } catch(e) {
      console.log(e);
    }
  };
  return (
    <>
      <PostForm />
      <section className="container">
        <h5 class="main-title text-center">--Your Plans--</h5>
        <Attending events={meData.attending}/>
      </section>
    </>
  )
};
export default Dashboard;