 'use client'
import { useRouter } from "next/navigation";
export default function Sidebar () {
const router = useRouter();
    const dataArray = [
        { id: "vid1", videosrc: "Topic 1" ,videoTitle:"q1547"},
        { id: "vid2", videosrc: "Topic 2" ,videoTitle:"aircraftw"},
        { id: "vid3", videosrc: "Topic 3" ,videoTitle:"lines"},
        { id: "vid4", videosrc: "Topic 4" ,videoTitle:"monrach"},
        { id: "vid5", videosrc: "Topic 5" ,videoTitle:"reading"},
        { id: "vid6", videosrc: "Topic 6" ,videoTitle:"versus"},
      ];
    //   console.log(dataArray,"array")

      
  const handleClick = (t: any) => {
    router.push(`/?tab=${t}`);

  };
    return (
      <>
       <div style={{textAlign:"left"}}>
            <h1 >List</h1>
            
        {dataArray.map((data:any)=>{return(
            <div key={data.id} 
            style={{color:"red"}}
            onClick={()=>{handleClick(`${data.id}`)}}>
                {data.videoTitle}
            </div>
        )}
        )}
        </div>

      </>
    );
}