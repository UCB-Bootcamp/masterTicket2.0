import React from 'react';
import { useQuery, useMutation } from '@apollo/react-hooks';
import { QUERY_SINGLE_POST } from '../utils/queries';
import { ATTEND_EVENT } from '../utils/mutations'
import { useParams } from 'react-router-dom';
import Auth from '../utils/auth';

const SinglePost = () => {
    const { id: postId } = useParams();
    const { loading, data } = useQuery(QUERY_SINGLE_POST, {
        variables: { id: postId },
        fetchPolicy: "network-only"
    });
    const post = data?.post || {};
    console.log('original post', post)
    const [attendEvent] = useMutation(ATTEND_EVENT, {
        variables: { id: postId }, 
        update(cache, { data: { attend: { attending } } }) {
            console.log('attending', attending );
            const { post } = cache.readQuery({ query: QUERY_SINGLE_POST, variables: { id: postId } });
            console.log('readQuery data ', post);
            cache.writeQuery({
                query: QUERY_SINGLE_POST,
                data: { data: { ...post, attending:{ attending} } } 
            })
            console.log ('after', post);
        },
    });

    const loggedIn = Auth.loggedIn();
    if(loading) {
        return <div>Loading...</div>;
    }

    // handle attend click
    const handleAttendClick = async () => {
        try {
            const updatedEvent = await attendEvent({
                variables: { postId: postId  }
            });
            console.log(updatedEvent.data.attend.attending.length)
        } catch (e) {
            console.error(e);
        }
    };

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
                                    <i className="bi bi-thumbs-up"></i>{  } attending this event!
                                </button>
                                {loggedIn && (
                                <button className="attend" onClick={handleAttendClick}>
                                    <i className="bi bi-thumbs-up"></i>ATTENDING?
                                </button>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="post-right">
                        <div className="img-container">
                            <img src={ post.image } alt= {post.eventTitle} />
                        </div>
                    </div>
                </div>
            </div>
        </section>  
    );
};

export default SinglePost;