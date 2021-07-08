import React from 'react';
import { useQuery } from '@apollo/client';
import { }

const singlePost = () => {

    return (
        <section>
            <div class="wrapper">
                <div class="main-post">
                    <div class="post-left">
                        <div class="post-details">
                            <h1>{{ post.event_title }}</h1>
                            <div class="post-cat">
                                <p class="venue">{{ post.venue }}</p>
                                <p class="date">{{ post.date }}</p>
                                <p class="genre">{{ post.genre }}</p>
                                <p class="city">{{ post.city }}</p>
                            </div>
                            <p class="desc">{{ post.event_description }}</p>
                            <div class="social-btn">

                                <button>
                                    <i class="bi bi-thumbs-up"></i>{{ pluralize_people post.attend_count }} attending this event!
                                </button>

                                <button class="attend">
                                    <i class="bi bi-thumbs-up"></i>ATTENDING?
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="post-right">
                        <div class="img-container">
                            <img src="{{ post.image }}" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>  
    );
};

            export default singlePost;