import React from 'react';
import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(import('react-owl-carousel3'));
import Link from 'next/link';

const options = {
    loop:true,
    margin:0,
    nav:true,
    mouseDrag: true,
    items:1,
    dots: false,
    autoplay: true,
    smartSpeed:1000,
    autoplayHoverPause: false,
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
                className="owl-carousel owl-theme"
                {...options}
            >
				<div className="item">
					<img src="/img/main-slider/posters/1.jpg" />
				</div>

				<div className="item">
				<img src="/img/main-slider/posters/2.jpg" />
				</div>

				<div className="item">
				<img src="/img/main-slider/posters/3.jpg" />
				</div>

				<div className="item">
				<img src="/img/main-slider/posters/4.jpg" />
				</div>

				<div className="item">
				<img src="/img/main-slider/posters/5.jpg" />
				</div>

				<div className="item">
				<img src="/img/main-slider/posters/6.jpg" />
				</div>

				<div className="item">
				<img src="/img/main-slider/posters/glucos.jpg" />
				</div>

				<div className="item">
				<img src="/img/main-slider/posters/lifebuoysanitizer.jpg" />
				</div>

				<div className="item">
				<img src="/img/main-slider/posters/pubg.jpg" />
				</div>
				<div className="item">
				<img src="/img/main-slider/posters/surfexcel.jpg" />
				</div>
				<div className="item">
				<img src="/img/main-slider/posters/vim.jpg" />
				</div>
				<div className="item">
				<img src="/img/main-slider/posters/whistlez.jpg" />
				</div>

            </OwlCarousel> : ''}

			{/* Social Wrap */}
			{/* <div className="social-wrap">
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
			</div> */}
		</div>
    )
}

export default HeroSlider;