import React, { useState } from 'react';
// import { Link } from 'react-router-dom';

const PostList = (props) => {

  const [posts] = useState([
    {
      _id: 12345,
      eventTitle: "Weezer",
      // createdAt: "Jul 5, 2021",
      username: "timmaayyy",
      venue: "SB Bowl",
      city: "Santa Barbara",
      band: "Weezer",
      genre: "Rock",
      eventDescription: "Concert",
      featuredEvent: false,
      date: "Sep 23, 2021",
      image: "none",
      // attending: [User]
    }
  ]);

  if (!posts.length) {
    return <h3>No posts yet!</h3>
  }
  // console.log({posts});

  return (

    <div>
      {/* <h3>{title}</h3> */}
      {posts &&
        posts.map((post, i) => (
          <article className="card" key={post._id}>
            <div className="card-info-hover">
              <i className="bi bi-heart"></i>
              <div className="card-clock-info">
                <i className="bi bi-clock"></i>
                <span className="card-time">{ post.date }</span>
              </div>
              <div className="goto">
                <button> <a href='/post/{ post._id }'>checkout post</a></button>
              </div>
            </div>
            <div className="card-img">
              <img src={ post.image } alt="a concert"/>
            </div>
            <div className="card-img-hover">
              <img src={ post.image } alt="a concert"/>
            </div>
            <div className="card-info">
              <span className="card-category">{ post.band }</span>
              <h3 className="card-title">{ post.eventTitle }</h3>
              <span className="card-by">at <a href="#" className="card-author" title="author">{ post.venue }</a></span>
            </div>
          </article>
      ))}
    </div>
  )

}


export default PostList;