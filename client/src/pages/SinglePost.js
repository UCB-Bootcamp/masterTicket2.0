import React, { useState } from 'react';
import { useQuery, useMutation } from '@apollo/react-hooks';
import { QUERY_SINGLE_POST } from '../utils/queries';
import { ATTEND_EVENT } from '../utils/mutations'
import { useParams } from 'react-router-dom';
import Auth from '../utils/auth';

const SinglePost = () => {
    const [attendCount, setAttendCount] = useState('');
    const { id: postId } = useParams();
    const { loading, data } = useQuery(QUERY_SINGLE_POST, {
        variables: { id: postId },
        fetchPolicy: "network-only"
    });
   const post = data?.post;

    const getPostData = () => {
        // console.log('post', post)
        const attendNum = post?.attending?.length;
        // console.log('attendNum', attendNum)
        if(attendNum && attendNum !== attendCount) {
            setAttendCount(attendNum)
        }
    };

    getPostData();

    const [attendEvent] = useMutation(ATTEND_EVENT, {
        variables: { id: postId }, 
        update(cache, { data: { attend: { attending } } }) {
            const { post } = cache.readQuery({ query: QUERY_SINGLE_POST, variables: { id: postId } });
            cache.writeQuery({
                query: QUERY_SINGLE_POST,
                data: { post: { ...post, attending: attending } } 
            })
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
            setAttendCount(updatedEvent.data.attend.attending.length)
        } catch (e) {
            console.error(e);
        }
    };

    // console.log(post.image);

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
                                    <i className="bi bi-thumbs-up"></i>{ attendCount || 0 } attending this event!
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