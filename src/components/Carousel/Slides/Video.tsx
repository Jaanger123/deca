import './Slides.scss';

const Video = () => {
    return (
        <>
            <video
                src={require('../../../assets/videos/IMG_3284.mp4')}
                autoPlay
                loop
                muted
            ></video>
        </>
    );
};

export default Video;
