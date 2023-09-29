"use client";
import { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";


export default function Home() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const currentParams = searchParams.get("tab");
  const[duration,setDuration]= useState<any>()
  // const [params, setParams] = useState(currentParams);
console.log(currentParams,"curr")
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const videoArray = [
        { id: "vid1", videosrc: "/videos/154792 (540p).mp4" ,videoAlt:"q1547"},
        { id: "vid2", videosrc: "/videos/aircraft_-_51501 (540p).mp4" ,videoAlt:"aircraft"},
        { id: "vid3", videosrc: "/videos/lines_-_72790 (540p).mp4" ,videoAlt:"lines"},
        { id: "vid4", videosrc: "/videos/monarch_-_327 (480p).mp4" ,videoAlt:"monrach"},
        { id: "vid5", videosrc: "/videos/reading_-_3608 (540p).mp4" ,videoAlt:"reading"},
        { id: "vid6", videosrc: "/videos/versus_-_88031 (1080p).mp4" ,videoAlt:"versus"},
  ];
  
  const [currentVideoIndex, setCurrentVideoIndex] = useState <any>(0);
 
  const handleVideoEnded = () => {
    setCurrentVideoIndex((prevIndex:any) => (prevIndex + 1) % videoArray.length);
    
  };
  
  const handleVideoLoadedMetadata = (event:any) => {
    const videoElement = event.target;
    const videoDuration = videoElement.duration;

    const videoCurrent = videoElement.currentTime;
    console.log(videoCurrent,"currenttime") 
    setDuration(videoDuration);
    // const LeftTimer :any= ((videoDuration*1000) - 5000);
    
    // console.log(LeftTimer,"left")
  };
 
  console.log(duration,"duration")
console.log(currentVideoIndex,"currentvideoindex")

// const handleProgress =(e:any)=>{
//   const currentTimes = e.target.currentTime
//   console.log(currentTimes,"time")
//   // setProgress((e.target.currentTime / e.target.duration) * 100);
// }
// console.log(progress,"progress")
  useEffect(() => {
    const videoElement:any = document.getElementById('videoPlayer');
    console.log(videoElement,"element")
    if (videoElement) {
      videoElement.src = videoArray[currentVideoIndex].videosrc;
      
      videoElement.play(); 
    }
    const videoId :any = videoArray[currentVideoIndex].id;
      console.log( videoId,"idsssssss" )
    router.push(`/?tab=${videoArray[currentVideoIndex].id}`) 
    
  }, [currentVideoIndex, videoArray, router]);
  


  return (
    <>
      <p>Videos auto run</p>
     

<div>
      <h1>Video Player</h1>
      <video
        controls
        width="250"
        id="videoPlayer"
        onEnded={handleVideoEnded}
        onLoadedMetadata={handleVideoLoadedMetadata}
        // onProgress={handleProgress}
        // onDurationChange={handleProgress}
        // onSeeked={handleProgress}
        autoPlay
        key={videoArray[currentVideoIndex].id}
      >
        <source src={videoArray[currentVideoIndex].videosrc} type="video/mp4" />
      </video>
    </div>
    </>
  );
}
