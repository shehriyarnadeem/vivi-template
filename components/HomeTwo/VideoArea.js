import React from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
const ModalVideo = dynamic(() => import('react-modal-video'), {
    ssr: false
});

const VideoArea = () => {
    const [isOpen, setIsOpen] = React.useState(true);
    const openModal = () => {
        setIsOpen(!isOpen);
    }
    return (
        <>
            {/* If you want to change the video need to update videoID */}
            <ModalVideo 
                channel='youtube' 
                isOpen={!isOpen} 
                videoId='bk7McNUjWgw' 
                onClose={() => setIsOpen(!isOpen)} 
            />
 
            <div className="video-created-area-two pb-100">
                <div className="container">
                    <div className="video-created-wrap">
                        <img src="/img/video-created-img-2.jpg" alt="Image" />

                        <div className="video-wrap">
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
                </div>
            </div>
        </>
    )
}

export default VideoArea;