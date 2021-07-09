import React from 'react';

const Attend = ({ events }) => {
    console.log(events)
    return (
        <>
            {events &&
                events.map((event, i) => (
                    <article className="card">
                        <div className="card-info-hover">
                            <i className="bi bi-heart"></i>
                            <div className="card-clock-info">
                                <i className="bi bi-clock"></i>
                                <span className="card-time">{events[0].date}</span>
                            </div>
                            <div className="goto">
                                <button> <a href='/post/'>checkout post</a></button>
                            </div>
                        </div>
                        <div className="card-img">
                            <img src={events[0].image} />
                        </div>
                        <div className="card-img-hover">
                            <img src={events[0].image} />
                        </div>
                        <div className="card-info">
                            <span className="card-category">{events[0].band}</span>
                            <h3 className="card-title">{events[0].eventTitle}</h3>
                            <span className="card-by">at <a href="#" className="card-author" title="author">{events[0].venue}</a></span>
                        </div>
                    </article>
                ))}
        </>
    );

};

export default Attend;