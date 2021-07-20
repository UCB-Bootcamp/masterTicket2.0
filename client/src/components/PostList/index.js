import React from 'react';
import { CardGroup , Card, Button} from 'react-bootstrap';

const PostList = ({ posts }) => {
  if (!posts.length) {
    return <h3>No posts yet!</h3>
  }

  return (

    <CardGroup className="flex-wrap sm-600 md-768">

      {posts &&
        posts.map((post, i) => (
          <Card className="mr-3 sm-600 md-768 " key={i} onClick={()=> (window.location.assign(`/post/${post._id}`))}>
            <Card.Body className="lg-992">
              <Card.Text className="text-center pt-3 font-weight-bold tx-tfm title">{post.band}</Card.Text>
              {/* <Card.Title>{post.eventTitle}</Card.Title> */}
              <Card.Text className="text-center pt-3">{post.date}</Card.Text>
            </Card.Body>
            <Card.Img className="card-img-top" src={post.image} alt={post.eventTitle} />
            <Button variant="secondary" className="m-auto sm-600 md-768 xl-button" onClick={()=> (window.location.assign(`/post/${post._id}`))}>checkout post</Button>
          </Card>
      ))}

    </CardGroup>  
  )
}

export default PostList;