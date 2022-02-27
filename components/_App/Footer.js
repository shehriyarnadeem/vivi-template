import React from 'react';
import Link from 'next/link';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <>
            <footer className="footer-top-area pt-100 pb-70">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6">
                            <div className="single-widget">
                                <div className="logo">
                                    <Link href="/">
                                        <a><img src="/img/whitelogo.png" alt="Image" style={{height:'10em'}} /></a>
                                    </Link>
                                </div>
                                
                                {/* <div className="newsletter-wrap">
                                    <h3>Subscribe Newsletter</h3>
                                    <form className="newsletter-form">
                                        <input type="email" className="form-control" placeholder="Enter email address" name="email" required />
            
                                        <button className="send-btn" type="submit">
                                            <i className="bx bx-right-arrow-alt"></i>
                                        </button>
                                    </form>
                                </div> */}

                                <ul className="social-wrap">

                                    <li>
                                        <a href="https://www.instagram.com/madoxproductions/" target="_blank">
                                            <i className="bx bxl-instagram"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.facebook.com/madoxproductions" target="_blank">
                                            <i className="bx bxl-facebook"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.youtube.com/channel/UCFdsGxVtQP-zX0JV_R4iFMg" target="_blank">
                                            <i className="bx bxl-youtube"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <div className="single-widget">
                                <h3>Contact Us</h3>

                                <ul className="address">
                                    <li>
                                        <i className="flaticon-pin"></i>
                                        14-c, Mazeline floor, Seher Commercial Lane 8, Phase 7, D.H.A, karachi, Pakistan
                                    </li>
                                    <li>
                                        <i className="flaticon-email-1"></i>
                                        <a href="mailto:info@madoxproductions.com">
                                            info@madoxproductions.com
                                        </a>

                                        {/* <a href="#">
                                            Skype: example
                                        </a> */}
                                    </li>
                                    <li>
                                        <i className="flaticon-phone-call"></i>
                                        <a href="tel:+1-587-785-4578">
                                            +92 331 2420290
                                        </a>
                                        <a href="tel:+1-485-456-0102">
                                            +92 336 0825510
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        
                        {/* <div className="col-lg-3 col-md-6">
                            <div className="single-widget">
                                <h3>Additional Links</h3>

                                <ul className="additional-link">
                                    <li>
                                        <Link href="/about">
                                            <a>About</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/portfolio-columns-two">
                                            <a>Latest Videos</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/team">
                                            <a>Team</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/faq">
                                            <a>Help (FAQ)</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/contact">
                                            <a>Contact</a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div> */}

                        {/* <div className="col-lg-3 col-md-6">
                            <div className="single-widget">
                                <h3>Instagram</h3>

                                <ul className="instagram">
                                    <li>
                                        <a href="https://www.instagram.com/" target="_blank">
                                            <img src="/img/instagram/instagram1.jpg" alt="Image" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.instagram.com/" target="_blank">
                                            <img src="/img/instagram/instagram2.jpg" alt="Image" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.instagram.com/" target="_blank">
                                            <img src="/img/instagram/instagram3.jpg" alt="Image" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.instagram.com/" target="_blank">
                                            <img src="/img/instagram/instagram4.jpg" alt="Image" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.instagram.com/" target="_blank">
                                            <img src="/img/instagram/instagram5.jpg" alt="Image" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.instagram.com/" target="_blank">
                                            <img src="/img/instagram/instagram6.jpg" alt="Image" />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div> */}
                    </div>
                </div>
            </footer>
		 
            <footer className="footer-bottom-area">
                <div className="container">
                    <div className="copyright-wrap">
                        <p>Copyright @{currentYear} Mad Ox. Designed By <a href="https://shehriyarnadeem.dev" target="blank">Shehriyar Nadeem</a></p>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer;