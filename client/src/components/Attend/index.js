import React from 'react';
const Attend = ({ events }) => {
// console.log('events', {events});
    return (
        <>
            {events &&
                events.map((event, i) => (
                    <article className="card" key={i}>
                        <div className="card-info-hover">
                            <i className="bi bi-heart"></i>
                            <div className="card-clock-info">
                                <i className="bi bi-clock"></i>
                                <span className="card-time">{event.date}</span>
                            </div>
                            <div className="goto">
                                <button onClick={()=> (window.location.assign(`/post/${event._id}`))}> checkout post</button>
                            </div>
                        </div>
                        <div className="card-img">
                            <img src={event.image} alt={event.description}/>
                        </div>
                        <div className="card-img-hover">
                            <img src={event.image} alt={event.description}/>
                        </div>
                        <div className="card-info">
                            <span className="card-category">{event.band}</span>
                            <h3 className="card-title">{event.eventTitle}</h3>
                            <span className="card-by">at <p className="card-author" title="author">{events[0].venue}</p></span>
                        </div>
                    </article>
                ))}
        </>
    );
};
export default Attend;
