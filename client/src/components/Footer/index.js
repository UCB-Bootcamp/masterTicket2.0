import React from 'react';

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="row">
                            <div className="col-md-6 ">
                                <div className="logo-part">
                                    <h2>masterTicket</h2>
                                    <p>3 Abbey Rd, London NW8 9AY, United Kingdom</p>
                                    <p>Drop us a line when you want to book or record your next event</p>
                                </div>
                            </div>
                            <div className="col-md-6 px-4">
                                <h6> about masterTicket</h6>
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
                    <div className="col-md-6">
                        <div className="row">
                            <div className="col-md-6 px-4">
                                <h6> dive deeper</h6>
                                <ul>
                                    <li> <a href="#"> home</a> </li>
                                    <li> <a href="#"> about</a> </li>
                                    <li> <a href="#"> services</a> </li>
                                    <li> <a href="#"> team</a> </li>
                                    <li> <a href="#"> help</a> </li>
                                    <li> <a href="#"> contact</a> </li>
                                </ul>
                            </div>
                            <div className="col-md-6 ">
                                <h6> news & social</h6>
                                <div className="social">
                                    <div className="row">
                                        <a href="#"><i className="bi bi-facebook"></i></a>
                                    </div>
                                    <div className="row">
                                        <a href="#"><i className="bi bi-twitter"></i></a>
                                    </div>
                                    <div className="row">
                                        <a href="#"><i className="bi bi-instagram"></i></a>
                                    </div>
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