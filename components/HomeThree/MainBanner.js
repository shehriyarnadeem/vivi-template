import React from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
const ModalVideo = dynamic(() => import('react-modal-video'), {
    ssr: false
});

const MaminBanner = () => {
    const [isOpen, setIsOpen] = React.useState(true);
    const openModal = () => {
        setIsOpen(!isOpen);
    }
    return (
        <>
            <div className="banner-area jarallax">
                <div className="d-table">
                    <div className="d-table-cell">
                        <div className="container-fluid">
                            <div className="row align-items-center">
                                <div className="col-lg-6">
                                    <div className="banner-video">
                                        <Link href="#play-video">
                                            <a
                                                onClick={e => {e.preventDefault(); openModal()}}
                                                className="popup-youtube"
                                            > 
                                                <i className="flaticon-play"></i>
                                            </a>
                                        </Link>
                                    </div>
                                </div>
            
                                <div className="col-lg-6">
                                    <div className="banner-text">
                                        <h1>Be The Hero Of Your Own Story</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="banner-img">
                    <img src="/img/banner/banner2.jpg" alt="Image" />
                </div>
            </div>

            {/* If you want to change the video need to update videoID */}
            <ModalVideo 
                channel='youtube' 
                isOpen={!isOpen} 
                videoId='bk7McNUjWgw' 
                onClose={() => setIsOpen(!isOpen)} 
            />
        </>
    )
}

export default MaminBanner;