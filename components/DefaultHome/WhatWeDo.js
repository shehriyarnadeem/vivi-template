import React from 'react';
import Link from 'next/link';

const WhatWeDo = () => {
    return (
        <div className="what-we-do-area pt-100 pb-70">
			<div className="container">
				<div className="row">
					<div className="col-lg-6">
						<div className="what-we-do-content"> 
							<span>What We Do</span>
							<h2>Video Solution Every Stage</h2>
							{/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>  */}

							{/* <div className="brand-wrap">
								<div className="row">
									<div className="col-lg-4 col-sm-6 col-md-4">
										<div className="brand">
                                            <Link href="#">
                                                <a>
                                                    <img src="/img/brand/brand1.png" alt="Image" />
                                                </a>
                                            </Link>
										</div>
									</div>
	
									<div className="col-lg-4 col-sm-6 col-md-4">
										<div className="brand">
                                            <Link href="#">
                                                <a>
                                                    <img src="/img/brand/brand2.png" alt="Image" />
                                                </a>
                                            </Link>
										</div>
									</div>
	
									<div className="col-lg-4 col-sm-6 col-md-4 offset-sm-3 offset-md-0">
										<div className="brand">
                                            <Link href="#">
                                                <a>
                                                    <img src="/img/brand/brand3.png" alt="Image" />
                                                </a>
                                            </Link>
										</div>
									</div>
								</div>
							</div> */}

                            {/* <Link href="/contact">
                                <a className="default-btn">
                                    Contact Us
                                </a>
                            </Link> */}
						</div>
					</div>

					<div className="col-lg-12">
						<div className="row">
							<div className="col-lg-4 col-sm-6">
								<div className="what-we-do-item">
									<img src="/img/pre_production.jpeg" className="pre-production-poster" />
									<h3 style={{ marginTop:'10px'}}>Pre-Production</h3>
									<p>Whatever happens before the director says the word “Action” is the most crucial element in the process of video production. This phase include everything from scouting locations to figuring out a budget. We at Mad Ox Productions acknowledge the importance of this phase therefore we provide our clients with utmost insight so that the two most valuable resources in film- making which is time and money can be managed efficiently.  </p>
								</div>
							</div>

							<div className="col-lg-4 col-sm-6">
								<div className="what-we-do-item">
								<img src="/img/production.jpeg" className="pre-production-poster" />
									<h3 style={{ marginTop:'10px'}}>Production</h3>
									<p>This is the phase where the camera starts rolling and the shooting begins. This process implements the vision that was set in the pre-production process, such as capturing all the necessary footage and providing necessary resources to stay on schedule. Mad Ox Productions ensures to provide the best production team out there so that the clients can see their ideas come to life.</p>
								</div>
							</div>

							<div className="col-lg-4 col-sm-6">
								<div className="what-we-do-item">
								 <img src="/img/post_production.jpeg" className="pre-production-poster" />
									<h3 style={{ marginTop:'10px'}}>Post-Production</h3>
									<p>Once the camera stops rolling the post production phase starts. This includes manipulating captured footage and adding all the sugar, spice and everything nice so that it can achieve the standard the client desires.</p>
								</div>
							</div>

							{/* <div className="col-lg-6 col-sm-6">
								<div className="what-we-do-item mt-mince-30">
									<i className="flaticon-movie"></i>
									<h3>Conversion</h3>
									<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
								</div>
							</div> */}
						</div>
					</div>
				</div>
			</div>
		</div>
    )
}

export default WhatWeDo;