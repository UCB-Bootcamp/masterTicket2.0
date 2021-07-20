import React from 'react';
import {Card, Button, Row, Col, Container} from 'react-bootstrap';

const PostList = ({ posts }) => {
  if (!posts.length) {
    return <h3>No posts yet!</h3>
  }

  return (
    
    <div class="card-group d-flex container">
      <div class="row">
      {posts &&
        posts.map((post, i) => (
          <div class="card col-6 col-md-4 m-auto" key={i} onClick={()=> (window.location.assign(`/post/${post._id}`))}>
            <div class="card-body">
              <h5 class="card-title">{post.band}</h5>
              {/* <Card.Title>{post.eventTitle}</Card.Title> */}
              <p class="card-text">{post.date}</p>
            </div>
            <img class="card-img-top" src={post.image} alt={post.eventTitle} />
            <button variant="secondary" class="" onClick={()=> (window.location.assign(`/post/${post._id}`))}>checkout post</button>
          </div>
      ))}
      </div>
    </div>  
  )
}

export default PostList;