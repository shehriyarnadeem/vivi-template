import React from 'react';

const TeamStyleTwo = () => {
    return (
        <div className="team-area-two pt-100 pb-70">
			<div className="container">
				<div className="section-title">
					{/* <span>FilmMakers</span> */}
					<h2>Meet The Team</h2>
				</div>

				<div className="row" style={{justifyContent:'space-between'}}>
					<div className="col-lg-6 col-sm-6">
						<div className="single-team">
							<div className="team-img">
								<img src="/img/team/team1.jpeg" alt="Image" className="team-picture-style" />
							</div>
							
							<div className="team-content">
								<h3>Rahul Aslam</h3>
								<span>CEO (Director & Executive Producer)</span>
							</div>
						</div>
					</div>
					
					<div className="col-lg-6 col-sm-6">
						<div className="single-team">
							<div className="team-img">
								<img src="/img/team/team2.jpg" alt="Image" className="team-picture-style" />
							</div>
	
							<div className="team-content">
								<h3>Ahmed Shahid</h3>
								<span>COO (Executive Producer) </span>
							</div>
						</div>
					</div>

					{/* <div className="col-lg-4 col-sm-6 offset-sm-3 offset-lg-0">
						<div className="single-team">
							<div className="team-img">
								<img src="/img/team/team4.jpg" alt="Image" />
	
								<ul className="social">
									<li>
										<a href="#" target="_blank">
											<i className="bx bxl-twitter"></i>
										</a>
									</li>
									<li>
										<a href="#" target="_blank">
											<i className="bx bxl-instagram"></i>
										</a>
									</li>
									<li>
										<a href="#" target="_blank">
											<i className="bx bxl-facebook"></i>
										</a>
									</li>
								</ul>
							</div>
	
							<div className="team-content">
								<h3>Mike Tucker</h3>
								<span>Movie Composer</span>
							</div>
						</div>
					</div> */}
				</div>
			</div>
		</div>
    )
}

export default TeamStyleTwo;