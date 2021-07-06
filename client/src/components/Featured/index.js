import React, { useState } from 'react';

const Featured = () => {
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
      image: "none",
      // attending: [User]
    },
    {
      _id: 12345,
      eventTitle: "Glass Animals",
      // createdAt: "Jul 5, 2021",
      username: "timmaayyy",
      venue: "SB Bowl",
      city: "Santa Barbara",
      band: "Glass Animals",
      genre: "Rock",
      eventDescription: "Concert",
      featuredEvent: false,
      date: "Oct 23, 2021",
      image: "none",
      // attending: [User]
    }
  ]);

  return (
    <section class="container" id="featured">
      <row class="header">
        <h5 class="text-center">--featured--</h5>

        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
          <div class="carousel-inner">
          {posts &&
            posts.map((post, i) => (
              <div class="carousel-item">
                <img src={post.image} class="d-block w-100" alt="..." />

                <div class="carousel-caption d-none d-md-block">

                  <h3>FEATURED EVENT: {post.eventTitle}</h3>
                  <p>Wouldn't you want to join in??</p>
                </div>
              </div>
            ))}
          </div>

          <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
            <span class="bi bi-skip-backward" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
            <span class="bi bi-skip-forward" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>

      </row>
    </section>
  );
}

export default Featured;