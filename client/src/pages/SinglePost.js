import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_SINGLE_POST } from '../utils/queries';
import { useParams } from 'react-router-dom';

const SinglePost = () => {
    const { id: postId } = useParams();
    const { loading, data } = useQuery(QUERY_SINGLE_POST, {
        variables: { id: postId }
    });
    const post = data?.post || {};
    if(loading) {
        return <div>Loading...</div>;
    }

    return (
        <section>
            <div className="wrapper">
                <div className="main-post">
                    <div className="post-left">
                        <div className="post-details">
                            <h1>{post.eventTitle}</h1>
                            <div className="post-cat">
                                <p className="venue">{post.venue}</p>
                                <p className="date">{ post.date }</p>
                                <p className="genre">{ post.genre }</p>
                                <p className="city">{ post.city }</p>
                            </div>
                            <p className="desc">{ post.eventDescription }</p>
                            <div className="social-btn">

                                <button>
                                    <i className="bi bi-thumbs-up"></i>{ post.attending.length } attending this event!
                                </button>

                                <button className="attend">
                                    <i className="bi bi-thumbs-up"></i>ATTENDING?
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="post-right">
                        <div className="img-container">
                            <img src={ post.image } alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>  
    );
};

export default SinglePost;