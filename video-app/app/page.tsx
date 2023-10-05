'use client'
import { useState, useEffect } from 'react';

const VideoList = () => {
  const videos = [
    { id: "vid1", videosrc: "/videos/154792 (540p).mp4", videoAlt: "q1547" },
    {
      id: "vid2",
      videosrc: "/videos/aircraft_-_51501 (540p).mp4",
      videoAlt: "aircraft",
    },
    {
      id: "vid3",
      videosrc: "/videos/lines_-_72790 (540p).mp4",
      videoAlt: "lines",
    },
    {
      id: "vid4",
      videosrc: "/videos/monarch_-_327 (480p).mp4",
      videoAlt: "monrach",
    },
    {
      id: "vid5",
      videosrc: "/videos/reading_-_3608 (540p).mp4",
      videoAlt: "reading",
    },
    {
      id: "vid6",
      videosrc: "/videos/versus_-_88031 (1080p).mp4",
      videoAlt: "versus",
    },
  ];

  const [currentVideo, setCurrentVideo] = useState(0);
  const [timeLeft, setTimeLeft] = useState(0);
  const [videoDuration, setVideoDuration] = useState(0);

  useEffect(() => {
    const video = document.getElementById('video-player') as HTMLVideoElement;
    if (video) {
      video.src = videos[currentVideo].videosrc;
      video.load();
      video.play();

      video.addEventListener('timeupdate', () => {
        const currentTime = Math.floor(video.currentTime);
        const duration = Math.floor(video.duration);

        setVideoDuration(duration);

        if (duration - currentTime <= 3) {
          setTimeLeft(3 - (duration - currentTime));
        } else {
          setTimeLeft(0);
        }
      });

      video.addEventListener('ended', () => {
        playNextVideo();
      });
    }
  }, [currentVideo]);

  const playNextVideo = () => {
    setCurrentVideo((prevVideo) => (prevVideo < videos.length - 1 ? prevVideo + 1 : 0));
  };

  return (
    <div>
      <h1>Video Player</h1>
      <video id="video-player" controls>
        Your browser does not support the video tag.
      </video>
      <h2>{videos[currentVideo].videoAlt}</h2>
      <p>{videos[currentVideo].videoAlt}</p>
      {timeLeft > 0 && <p>Time left: {timeLeft} seconds</p>}
      {/* {timeLeft === 0 && <p>Video completed</p>} */}

      <h2>All Videos</h2>
      <ul>
        {videos.map((video, index) => (
          <li key={index}>{video.videoAlt}</li>
        ))}
      </ul>

      <button onClick={playNextVideo}>Play Next Video</button>
    </div>
  );
};

export default VideoList;
