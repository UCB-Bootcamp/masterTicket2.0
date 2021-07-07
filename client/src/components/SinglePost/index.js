import React from 'react';


const SinglePost = ({}) => {
    if(!post.length) {
        return <h3>These aren't the posts you're looking for!</h3>
    }

    return(

        <section>
            <div class="wrapper">
                <div class="main-post">
                    <div class="post-left">
                        <div class="post-details">
                            <h1>{{post.event_title}}</h1>
                            <div class="post-cat">
                            {{!-- CHANGe classes for css --}}
                                <p class="venue">{{post.venue}}</p>
                                <p class="date">{{post.date}}</p>
                                <p class="genre">{{post.genre}}</p>
                                <p class="city">{{post.city}}</p>
                            </div>
                            <p class="desc">{{post.event_description}}</p>
                            <div class="social-btn">

                            {{!-- Make into a span to display the attendance count? --}}
                                <button>
                                    <i class="bi bi-thumbs-up"></i>{{pluralize_people post.attend_count}} attending this event!
                                </button>

                            {{!-- Proper attending icon  --}}
                                <button class="attend">
                                    <i class="bi bi-thumbs-up"></i>ATTENDING?
                                </button>
                            </div>  
                        </div>
                    </div>
                    <div class="post-right">
                        <div class="img-container">
                            <img src="{{ post.image }}" alt="">
                        </div>
                    </div>
                </div>
            </div>
        </section>
        )
}

export default SinglePost;