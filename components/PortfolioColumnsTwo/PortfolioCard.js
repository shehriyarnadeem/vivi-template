import React, { useEffect } from 'react';
import axios from 'axios';
import Link from 'next/link';
import dynamic from 'next/dynamic';
const ModalVideo = dynamic(() => import('react-modal-video'), {
    ssr: false
});

const PortfolioCard = ({videos}) => {
    const [isOpen, setIsOpen] = React.useState(true);
    const [portfolio, setPortfolio] = React.useState(videos);
    const [videoId, setVideoId] = React.useState(null);
    const openModal = (videoID) => {
        setIsOpen(!isOpen);
        setVideoId(videoID);
    }

    return (
        <section className="portfolio-area ptb-100">
            {/* If you want to change the video need to update videoID */}
            <ModalVideo 
                channel='youtube' 
                isOpen={!isOpen} 
                videoId={videoId} 
                onClose={() => setIsOpen(!isOpen)} 
            />

		<div className="container">
            <div className="row">
            {portfolio && portfolio.map((item)=>{
                return (
                    <div className="col-lg-6 col-md-6" key={item.id.videoID}>
                        <div className="single-portfolio">
                            <div className="portfolio-image bg-1" style={{ backgroundImage: `url(${item.snippet.thumbnails.high.url})` }}>
                                <div className="price-wrap">
                                    <Link href="#play-video">
                                        <a
                                            onClick={e => {e.preventDefault(); openModal(item.id.videoId)}}
                                            className="popup-youtube"
                                        > 
                                            <i className="flaticon-play"></i>
                                        </a>
                                    </Link>
                                </div>
                            </div>

                            <div className="portfolio-content">
                                <h3>
                                    <Link href="/portfolio-details">
                                        <a>{item.snippet.title}</a>
                                    </Link>
                                </h3>
                            </div>
                        </div>
                    </div>
                        )
                    })}

                    {/* <div className="col-12 text-center">
                        <Link href="#">
                            <a className="default-btn">
                                View More
                            </a>
                        </Link>
                    </div> */}
                </div>
			</div>
		</section>
    )
}


export default PortfolioCard;