import React from 'react';

const Attending = ({ events }) => {
    // if not attending events
    if(!events.length) {
        return <p className="plans">You're not attending any events yet :(</p>;
    }

    return (
        // if attending events return PostList of Events youre attending
        <p className="plans">hi</p>
    );
};

export default Attending;