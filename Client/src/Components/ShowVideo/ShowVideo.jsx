import React, {useRef,useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
import moment from 'moment'
import './ShowVideo.css'
function ShowVideo({vid}) {
//console.log(vid)
const videoRef = useRef(null);
  const [tapCount, setTapCount] = useState(0);
  const [holdTimeout, setHoldTimeout] = useState(null);
  const [popup, setPopup] = useState('');

  useEffect(() => {
    let timer;
    if (tapCount > 0) {
      timer = setTimeout(() => setTapCount(0), 300);
    }
    return () => clearTimeout(timer);
  }, [tapCount]);

  const handleTouchStart = (e) => {
    setHoldTimeout(setTimeout(() => handleHold(e), 500));
  };

  const handleTouchEnd = (e) => {
    clearTimeout(holdTimeout);
    handleTap(e);
  };

  const handleTap = (e) => {
    setTapCount(tapCount + 1);
    const video = videoRef.current;
    const rect = video.getBoundingClientRect();
    const x = e.changedTouches[0].clientX - rect.left;
    const y = e.changedTouches[0].clientY - rect.top;

    if (tapCount === 0) {
      setTimeout(() => {
        if (tapCount === 1) {
          if (x > rect.width * 0.8 && y < rect.height * 0.2) {
            showPopup();
          } else if (x < rect.width * 0.5) {
            video.currentTime -= 10;
          } else if (x > rect.width * 0.5) {
            video.currentTime += 10;
          }
        } else if (tapCount === 2) {
          video.paused ? video.play() : video.pause();
        } else if (tapCount === 3) {
          if (x < rect.width * 0.5) {
            showComments();
          } else if (x > rect.width * 0.5 && x < rect.width * 0.8) {
            nextVideo();
          } else if (x > rect.width * 0.8) {
            closeWebsite();
          }
        }
        setTapCount(0);
      }, 300);
    }
  };

  const handleHold = (e) => {
    const video = videoRef.current;
    const rect = video.getBoundingClientRect();
    const x = e.targetTouches[0].clientX - rect.left;

    if (x < rect.width * 0.5) {
      video.playbackRate = 0.5;
    } else {
      video.playbackRate = 2.0;
    }

    setTimeout(() => {
      video.playbackRate = 1.0;
    }, 500);
  };

  const showPopup = () => {
    // Implement fetching current location and temperature
    setPopup('Location: New York, Temp: 25°C');
    setTimeout(() => setPopup(''), 3000);
  };

  const nextVideo = () => {
    // Implement navigation to next video
    console.log('Next video');
  };

  const closeWebsite = () => {
    // Implement website closing
    console.log('Close website');
  };

  const showComments = () => {
    // Implement showing comments section
    console.log('Show comments');
  };


  return (
    <>
    <Link to={`/videopage/${vid?._id}`}>
         <video
          ref={videoRef}
        src={`http://localhost:5500/${vid?.filePath}`}
        className = "video_ShowVideo"
        onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
         /> 
   </Link>
    <div className="video_description">
      <div className="Chanel_logo_App">
        <div className="fstChar_logo_App">
            <>{vid?.Uploader?.charAt(0).toUpperCase()}</>
        </div>
        </div>
        <div className="video_details">
          <p className="title_vid_ShowVideo"> {vid?.videoTitle} </p>
          <pre className='vid_views_UploadTime'>{vid?.createdAt}</pre>
          <pre className='vid_views_UploadTime'>
            {vid?.Views} views<div className="dot"> </div> {moment(vid?.createdAt).fromNow()}
          </pre>
        </div>
    </div>
    {popup && <div className="popup">{popup}</div>}
    </>
  )
}

export default ShowVideo
