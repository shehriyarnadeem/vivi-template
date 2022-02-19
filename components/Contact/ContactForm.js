import React, { useState } from 'react'
import axios from 'axios'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
const MySwal = withReactContent(Swal)
import baseUrl from '../../utils/baseUrl'

const alertContent = () => {
    MySwal.fire({
        title: 'Congratulations!',
        text: 'Your message was successfully send and will back to you soon',
        icon: 'success',
        timer: 2000,
        timerProgressBar: true,
        showConfirmButton: false,
    })
}

// Form initial state
const INITIAL_STATE = {
    name: "",
    email: "",
    number: "",
    subject: "",
    text: ""
};

const ContactForm = () => {

	const [contact, setContact] = useState(INITIAL_STATE);

    const handleChange = e => {
        const { name, value } = e.target;
        setContact(prevState => ({ ...prevState, [name]: value }));
        // console.log(contact)
    }

    const handleSubmit = async e => {
        e.preventDefault();
        try {
            const url = `${baseUrl}/api/contact`;
            const { name, email, number, subject, text } = contact;
            const payload = { name, email, number, subject, text };
            const response = await axios.post(url, payload);
            console.log(response);
            setContact(INITIAL_STATE);
            alertContent();
        } catch (error) {
            console.log(error)
        }
    };

    return (
        <div className="contact-area ptb-100">
			<div className="container">
				<div className="row">
					<div className="col-lg-4 col-md-5">
						<div className="contact-info">
							<h3>Get In Touch</h3>
							<p>Mon-Sat: 8:00am – 8:00pm</p>

							<ul>
								<li>
									<i className="flaticon-phone-call"></i>
									Phone:
									<a href="tel:15877854578">+1 587 785 4578</a>
								</li>
								<li>
									<i className="flaticon-email-1"></i>
									Email:
									<a href="mailto:hello@vivi.com">hello@vivi.com</a>
								</li>
								<li>
									<i className="flaticon-pin"></i>
									Address:
									<span>6890 Blvd, The Bronx, NY 1058 <br /> New York, USA</span>
								</li>
							</ul>

							<ul className="social-wrap">
								<li className="follow">
									Follow Us
								</li>
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
						</div>
					</div>

					<div className="col-lg-8 col-md-7">
						<div className="contact-wrap">
							<h3>Write Us</h3>
 
							<form onSubmit={handleSubmit} id="contactForm">
                                <div className="row align-items-center">
                                    <div className="col-lg-6 col-md-6">
                                        <div className="form-group">
                                            <input 
                                                type="text" 
                                                name="name" 
                                                placeholder="Your Name" 
                                                className="form-control" 
                                                value={contact.name}
                                                onChange={handleChange} 
                                                required 
                                            />
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6">
                                        <div className="form-group">
                                            <input 
                                                type="text" 
                                                name="email" 
                                                placeholder="Your Email" 
                                                className="form-control" 
                                                value={contact.email}
                                                onChange={handleChange} 
                                                required 
                                            />
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6">
                                        <div className="form-group">
                                            <input 
                                                type="text" 
                                                name="number" 
                                                placeholder="Phone Number" 
                                                className="form-control" 
                                                value={contact.number}
                                                onChange={handleChange} 
                                                required 
                                            />
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6">
                                        <div className="form-group">
                                            <input 
                                                type="text" 
                                                name="subject" 
                                                placeholder="Your Subject" 
                                                className="form-control" 
                                                value={contact.subject}
                                                onChange={handleChange} 
                                                required 
                                            />
                                        </div>
                                    </div>
                                    <div className="col-lg-12 col-md-12">
                                        <div className="form-group">
                                            <textarea 
                                                name="text" 
                                                cols="30" 
                                                rows="5" 
                                                placeholder="Your Message" 
                                                className="form-control" 
                                                value={contact.text}
                                                onChange={handleChange} 
                                                required 
                                            />
                                        </div>
                                    </div>
                                    <div className="col-lg-12 col-sm-12">
										<button type="submit" className="default-btn page-btn">
											Send Message
										</button>
                                    </div>
                                </div>
                            </form>
						</div>
					</div>
				</div>
			</div>
		</div>
    )
}

export default ContactForm;