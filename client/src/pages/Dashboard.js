import React from 'react';
import PostForm from '../components/PostForm';
const Dashboard = () => {
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