import React from 'react';
import { QUERY_FEAT_POSTS } from '../../utils/queries';
import { useQuery } from '@apollo/react-hooks';
import 'bootstrap/dist/css/bootstrap.min.css';

const Featured = () => {

    const { data } = useQuery(QUERY_FEAT_POSTS);
    const featuredEvent = data?.featuredEvent || [];

  return (
    <section className="container" id="featured">
      <div className="header row">
        <h5 className="text-center">--featured--</h5>

        <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
          <div className="carousel-inner">
          {featuredEvent &&
            featuredEvent.map((post, i) => (
              <div className="carousel-item" key={i}>
                <img src={post.image} className="d-block w-100" alt="..." />

                <div className="carousel-caption d-none d-md-block">

                  <h3>FEATURED EVENT: {post.eventTitle}</h3>
                  <p>Wouldn't you want to join in??</p>
                </div>
              </div>
            ))}
          </div>

          <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
            <span className="bi bi-skip-backward" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
            <span className="bi bi-skip-forward" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>

      </div>
    </section>
  );
}

export default Featured;