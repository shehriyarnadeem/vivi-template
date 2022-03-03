import React from 'react';
import Link from 'next/link';
import { useSelector, useDispatch } from 'react-redux'

const SidebarModal = () => {
	const dispatch = useDispatch()
	const sidebarModal = useSelector((state) => state.sidebarModalState)

	// Sidebar Modal
    const toggleSidebarModal = () => {
        dispatch({
            type: 'SIDEBAR_MODAL_STATE',
        })
	}
	
    return (
        <div className={`sidebar-modal ${sidebarModal ? 'active' : ''}`}>
            <div className="sidebar-modal-inner">
				<div className="sidebar-header">
					<div className="sidebar-logo">
                        <Link href="/">
						    <a><img src="/img/logo.png" alt="Image" /></a>
                        </Link>
					</div>
					
					<span className="close-btn sidebar-modal-close-btn" onClick={toggleSidebarModal}>
						<i className="bx bx-x"></i>
					</span>
				</div>

                <div className="sidebar-about">
                    <div className="title">
                        <p>Mad Ox is a high quality video production house. We make a awesome branded videos. It is the analogical of film making, but the images are digitally recorded instead of film stock.</p>
                    </div>
                </div>

                <div className="contact-us">
                    <h2>Contact Us</h2>

                    <ul>
						<li>
							<i className="flaticon-pin"></i>
							14/c, Lane 8, Khe-e-Seher Commercial, Phase 7, Karachi, Pakistan
						</li>

						<li>
							<i className="flaticon-email-1"></i>
							<a href="mailto:hello@vivi.com">info@madoxproductions.com</a>
						</li>

						<li>
							<i className="flaticon-phone-call"></i>
							<a href="tel:021-33380449">021-33380449</a>
							<a href="tel:0300-1305269">0300-1305269</a>
						</li>
					</ul>
				</div>
				
                {/* <div className="sidebar-instagram-feed">
                    <h2>Instagram</h2>

                    <ul>
                        <li>
							<a href="https://www.instagram.com/" target="_blank">
								<img src="/img/instagram/instagram1.jpg" alt="image" />
							</a>
						</li>
                        <li>
							<a href="https://www.instagram.com/" target="_blank">
								<img src="/img/instagram/instagram2.jpg" alt="image" />
							</a>
						</li>
                        <li>
							<a href="https://www.instagram.com/" target="_blank">
								<img src="/img/instagram/instagram3.jpg" alt="image" />
							</a>
						</li>
                        <li>
							<a href="https://www.instagram.com/" target="_blank">
								<img src="/img/instagram/instagram4.jpg" alt="image" />
							</a>
						</li>
                        <li>
							<a href="https://www.instagram.com/" target="_blank">
								<img src="/img/instagram/instagram5.jpg" alt="image" />
							</a>
						</li>
                        <li>
							<a href="https://www.instagram.com/" target="_blank">
								<img src="/img/instagram/instagram6.jpg" alt="image" />
							</a>
						</li>
                    </ul>
                </div> */}

                {/* <div className="sidebar-follow-us">
					<h2>Sidebar Follow</h2>

					<ul className="social-wrap">
						<li>
							<a href="https://twitter.com/" target="_blank">
								<i className="bx bxl-twitter"></i>
							</a>
						</li>
						<li>
							<a href="https://www.instagram.com/" target="_blank">
								<i className="bx bxl-instagram"></i>
							</a>
						</li>
						<li>
							<a href="https://www.facebook.com/" target="_blank">
								<i className="bx bxl-facebook"></i>
							</a>
						</li>
						<li>
							<a href="https://www.youtube.com/" target="_blank">
								<i className="bx bxl-youtube"></i>
							</a>
						</li>
					</ul>
                </div> */}
            </div>
        </div>
    )
}

export default SidebarModal;