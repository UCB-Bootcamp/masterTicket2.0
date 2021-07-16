import React from 'react';
import { CardGroup , Card, Button} from 'react-bootstrap';

const PostList = ({ posts }) => {
  if (!posts.length) {
    return <h3>No posts yet!</h3>
  }
console.log('posts', posts);
  return (

    <CardGroup className="flex-wrap justify-content-between">

    {posts &&
      posts.map((post, i) => (
        <Card key={i} onClick={()=> (window.location.assign(`/post/${post._id}`))}>
          <Card.Body>
            <Card.Text className="text-center pt-3">{post.band}</Card.Text>
            {/* <Card.Title>{post.eventTitle}</Card.Title> */}
            <Card.Text className="text-center pt-3">{post.date}</Card.Text>
          </Card.Body>
          <Card.Img className="card-img-top" src={post.image} alt={post.eventTitle} />
          <Button variant="secondary" className="m-auto"> <a href='/post/{ post._id }'>checkout post</a></Button>
        </Card>
    ))}

    </CardGroup>  
  )
}

export default PostList;