import React from 'react';
import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(import('react-owl-carousel3'));
import Link from 'next/link';

const options = {
    loop:true,
    margin:0,
    // nav:true,
    mouseDrag: false,
    items:1,
    dots: true,
    autoplay: true,
    smartSpeed:500,
    autoplayHoverPause: true,
    navText: [
        "<i class='bx bx-chevron-left'></i>",
        "<i class='bx bx-chevron-right'></i>",
    ]
};

const HeroSlider = () => {
    const [display, setDisplay] = React.useState(false);

    React.useEffect(() => {
        setDisplay(true);
    }, [])

    return (
        <div className="hero-slider-area">
            {display ? <OwlCarousel 
                className="hero-slider-wrap owl-carousel owl-theme"
                {...options}
            >
				<div className="hero-slider-item bg-1">
					<div className="d-table">
						<div className="d-table-cell">
							<div className="container">
							</div>
						</div>
					</div>
				</div>

				<div className="hero-slider-item bg-2">
					<div className="d-table">
						<div className="d-table-cell">
							<div className="container">
							</div>
						</div>
					</div>
				</div>

				<div className="hero-slider-item bg-3">
					<div className="d-table">
						<div className="d-table-cell">
							<div className="container">
								
							</div>
						</div>
					</div>
				</div>

				<div className="hero-slider-item bg-4">
					<div className="d-table">
						<div className="d-table-cell">
							<div className="container">
								
							</div>
						</div>
					</div>
				</div>

				<div className="hero-slider-item bg-5">
					<div className="d-table">
						<div className="d-table-cell">
							<div className="container">
								
							</div>
						</div>
					</div>
				</div>

				<div className="hero-slider-item bg-6">
					<div className="d-table">
						<div className="d-table-cell">
							<div className="container">
								
							</div>
						</div>
					</div>
				</div>

				{/* <div className="hero-slider-item bg-7">
					<div className="d-table">
						<div className="d-table-cell">
							<div className="container">
								
							</div>
						</div>
					</div>
				</div> */}

				{/* <div className="hero-slider-item bg-8">
					<div className="d-table">
						<div className="d-table-cell">
							<div className="container">
								
							</div>
						</div>
					</div>
				</div> */}
				{/* <div className="hero-slider-item bg-9">
					<div className="d-table">
						<div className="d-table-cell">
							<div className="container">
								
							</div>
						</div>
					</div>
				</div> */}

				<div className="hero-slider-item bg-10">
					<div className="d-table">
						<div className="d-table-cell">
							<div className="container">
								
							</div>
						</div>
					</div>
				</div>

				<div className="hero-slider-item bg-11">
					<div className="d-table">
						<div className="d-table-cell">
							<div className="container">
								
							</div>
						</div>
					</div>
				</div>
				<div className="hero-slider-item bg-12">
					<div className="d-table">
						<div className="d-table-cell">
							<div className="container">
								
							</div>
						</div>
					</div>
				</div>
				<div className="hero-slider-item bg-13">
					<div className="d-table">
						<div className="d-table-cell">
							<div className="container">
								
							</div>
						</div>
					</div>
				</div>
				<div className="hero-slider-item bg-14">
					<div className="d-table">
						<div className="d-table-cell">
							<div className="container">
								
							</div>
						</div>
					</div>
				</div>
				<div className="hero-slider-item bg-15">
					<div className="d-table">
						<div className="d-table-cell">
							<div className="container">
								
							</div>
						</div>
					</div>
				</div>
				<div className="hero-slider-item bg-16">
					<div className="d-table">
						<div className="d-table-cell">
							<div className="container">
								
							</div>
						</div>
					</div>
				</div>
				<div className="hero-slider-item bg-17">
					<div className="d-table">
						<div className="d-table-cell">
							<div className="container">
								
							</div>
						</div>
					</div>
				</div>
				<div className="hero-slider-item bg-18">
					<div className="d-table">
						<div className="d-table-cell">
							<div className="container">
								
							</div>
						</div>
					</div>
				</div>
				

            </OwlCarousel> : ''}

			{/* Social Wrap */}
			<div className="social-wrap">
				<ul>
					<li className="follow-us">
						Follow Us:
					</li>
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
    )
}

export default HeroSlider;