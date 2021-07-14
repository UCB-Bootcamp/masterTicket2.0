import React from 'react';


const MyPosts = ({ myPosts }) => {
  // if (!myPosts.length) {
  //   return <h3>You haven't made any posts</h3>
  // }

// console.log('myPosts myPosts', myPosts)

  return (
    <>
      { myPosts && 
        myPosts.map((post, i) => (

        <article className="card" key={i} onClick={()=> (window.location.assign(`/post/${post._id}`))}>
            <div className="card-info-hover">
              <i className="bi bi-heart"></i>
              <div className="card-clock-info">
                <i className="bi bi-clock"></i>
                <span className="card-time">{post.date}</span>
              </div>
              <div className="goto">
                <button> <a href='/post/{ post._id }'>checkout post</a></button>
              </div>
            </div>
            <div className="card-img-hover">
              <img src={post.image} alt={post.eventTitle} />
            </div>
            <div className="card-info">
              <span className="card-category">{post.band}</span>
              <h3 className="card-title">{post.eventTitle}</h3>
              <p>{post.eventDescription}</p>
            </div>
          </article>
      ))}
    </>
  )
}

export default MyPosts;