import React from 'react';
import { QUERY_FEAT_POSTS } from '../../utils/queries';
import { useQuery } from '@apollo/react-hooks';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel' 

const Featured = () => {

    const { data } = useQuery(QUERY_FEAT_POSTS);
    const featuredEvent = data?.featuredEvent || [];

  return (
    <section>
      <h5 className="text-center" id="featured">--featured events--</h5>
      <Carousel id="" className="controls" data-ride="carousel">
        {featuredEvent.map((post, i) => (
          <Carousel.Item key={i} className="w-100">
            <img
              className="d-block w-100"
              src={post.image}
              alt="..."
            />
            <Carousel.Caption>
              <div className=" d-none d-md-block">

            <h3>FEATURED EVENT: {post.eventTitle}</h3>
            <p>Wouldn't you want to join in??</p>
            </div>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </section>
  );
}

export default Featured;