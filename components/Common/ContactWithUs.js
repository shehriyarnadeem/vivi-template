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

const ContactWithUs = () => {

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
        <div className="collaborate-area ptb-100">
			<div className="container">
				<div className="section-title">
					<span>Collaborate</span>
					<h2>Work With Us</h2>
				</div>
				<div className="row align-items-center">
					<div className="col-lg-6">
						<div className="collaborate-img">
							<img src="/img/collaborate-img.jpg" alt="Image" />
						</div>
					</div>

					<div className="col-lg-6">
						<div className="collaborate-form">
							<form onSubmit={handleSubmit}>
								<div className="row">
									<div className="col-12 col-sm-6">
										<div className="form-group">
											<label>Name</label>
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
									<div className="col-12 col-sm-6">
										<div className="form-group">
											<label>Email Address</label>
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
									<div className="col-12 col-sm-12">
										<div className="form-group">
											<label>Phone Number</label>
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
									<div className="col-12 col-sm-12">
										<div className="form-group">
											<label>Subject</label>
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
							 
									<div className="col-12">
										<div className="form-group">
											<label>Message</label>
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
									<div className="col-12">
										<button className="default-btn btn-two" type="submit">
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

export default ContactWithUs;