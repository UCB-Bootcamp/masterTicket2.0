import React from 'react';

const PostList = ({ posts }) => {
  if (!posts.length) {
    return <h3>No posts yet!</h3>
  }

  return (
    
    <div class="card-group d-flex container">
      <div class="row ">
      {posts &&
        posts.map((post, i) => (
          <article class="card col-6 col-md-4 m-auto pb-3" key={i} onClick={()=> (window.location.assign(`/post/${post._id}`))}>
          
            <div class="card-body ">
              <h5 class="card-title">{post.band}</h5>
              <p class="card-text">{post.date}</p>
            </div>
            <img class="card-img-top mb-3" src={post.image} alt={post.eventTitle} />
            <button type="button" variant="secondary" class="btn btn-light btn-sm" onClick={()=> (window.location.assign(`/post/${post._id}`))}>checkout post</button>
          </article>

      ))}
      </div>
    </div>  
  )
}

export default PostList;