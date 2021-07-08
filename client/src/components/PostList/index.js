import React from 'react';

const PostList = ({posts}) => {
  if (!posts.length) {
    return <h3>No posts yet!</h3>
  }

  return (
    <div>
      {posts &&
        posts.map((post, i) => (
          <article className="card" key={i}>
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
            <div className="card-img-hover">
              <img src={ post.image } alt={ post.eventTitle }/>
            </div>
            <div className="card-info">
              <span className="card-category">{ post.band }</span>
              <h3 className="card-title">{ post.eventTitle }</h3>
            </div>
          </article>
      ))}
    </div>
  )
}

export default PostList;