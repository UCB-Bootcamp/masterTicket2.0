import React from 'react';

const PostList = ({ posts }) => {
  if (!posts.length) {
    return <h3>No posts yet!</h3>
  }

  return (
    
    <div className="card-group d-flex container">
      <div className="row ">
      {posts &&
        posts.map((post, i) => (
          <article className="card col-6 col-md-4 m-auto pb-3" key={i} onClick={()=> (window.location.assign(`/post/${post._id}`))}>
            <div className="card-body band-venue-container">
              <div className="band-venue">
                <h5 className="card-title">{post.band}</h5>
              </div>
              <div className="band-venue">
                <h5 className="card-title">{post.venue}</h5>
              </div>
            </div>
            <p className="card-text date">{post.date}</p>
            <img className="card-img-top mb-3" src={post.image} alt={post.eventTitle} />
            <button type="button" variant="secondary" className="btn btn-light btn-sm checkout-post-button" onClick={()=> (window.location.assign(`/post/${post._id}`))}>checkout post</button>
          </article>
      ))}
      </div>
    </div>  
  )
}

export default PostList;