import React from 'react';
import Attend from '../Attend';
const AttendingList = (props) => {
    const events = props.events|| {};
    if (!events.length) {
        return <p className="plans">You're not attending any events yet :(</p>;
    }
    return (
        // if attending events return PostList of Events youre attending
        <div className="cards col-md-6 col-lg-3 ">
            < Attend events ={events}/>
        </div>
    );
};
export default AttendingList;
