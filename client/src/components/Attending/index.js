import React from 'react';

const Attending = (props) => {
    const events = props.events|| {};
    console.log('attending', events)
    // if not attending events
    if (!events.length) {
        return <p className="plans">You're not attending any events yet :(</p>;
    }
    return (
        // if attending events return PostList of Events youre attending
        <div class="cards col-md-6 col-lg-3 ">
            hi
            {/* <article class="card">
                <div class="card-info-hover">
                    <i class="bi bi-heart"></i>
                    <div class="card-clock-info">
                        <i class="bi bi-clock"></i>
                        <span class="card-time">{ date }</span>
                    </div>
                    <div class="goto">
                        <button> <a href='/post/'>checkout post</a></button>
                    </div>
                </div>
                <div class="card-img">
                    <img src={ image } />
                </div>
                <div class="card-img-hover">
                    <img src={ image } />
                </div>
                <div class="card-info">
                    <span class="card-category">{ band }</span>
                    <h3 class="card-title">{ eventTitle }</h3>
                    <span class="card-by">at <a href="#" class="card-author" title="author">{ venue }</a></span>
                </div>
            </article> */}
        </div>
    );
};

export default Attending;