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
      // image: "none",
      // attending: [User]
    }
  ]);

  if (!posts.length) {
    return <h3>No posts yet!</h3>
  }
  console.log({posts});

  return (

    <div>
      {/* <h3>{title}</h3> */}
      {posts.map((post, i) => (
        <div key={post.eventTitle}></div>

      ))}
  
      {/* {posts &&
        posts.map(post => ( */}
          {/* <article class="card">
            <div class="card-info-hover">
              <i class="bi bi-heart"></i>
              <div class="card-clock-info">
                <i class="bi bi-clock"></i>
                <span class="card-time">{{ date }}</span>
              </div>
              <div class="goto">
                <button> <a href='/post/{{ post._id }}'>checkout post</a></button>
              </div>
            </div>
            {/* <div class="card-img">
              <img src="{{ image }}" />
            </div>
            <div class="card-img-hover">
              <img src="{{ image }}" />
            </div> */}
            {/* <div class="card-info">
              <span class="card-category">{{ band }}</span>
              <h3 class="card-title">{{ eventTitle }}</h3>
              <span class="card-by">at <a href="#" class="card-author" title="author">{{ venue }}</a></span>
            </div>
          </article> */}
        {/* ))} */}
    </div>
  )

}


export default PostList;