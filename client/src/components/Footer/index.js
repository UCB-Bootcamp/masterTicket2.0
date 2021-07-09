import React from 'react';

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-md-8">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="logo-part">
                                    <h2>masterTicket2.0</h2>
                                    <p>3 Abbey Rd, London NW8 9AY, United Kingdom</p>
                                    <p>Drop us a line when you want to book or record your next event</p>
                                </div>
                            </div>
                            <div className="col-md-6 px-4">
                                <h6> about masterTicket2.0</h6>
                                <p>Find out how we became so awesome at rocking!</p>
                                <div className="social-btn">
                                    <button>
                                        <i className="bi bi-info-circle"></i>  more info
                                    </button>
                                    <button>
                                            <i className="bi bi-telephone-forward"></i>  contact us
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;