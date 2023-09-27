
import { useRouter } from "next/router";
export default function Sidebar () {
const router = useRouter();
    const dataArray = [
        { id: "vid1", videosrc: "Topic 1" ,videoTitle:"q"},
        { id: "vid2", videosrc: "Topic 2" ,videoTitle:"w"},
        { id: "vid3", videosrc: "Topic 3" ,videoTitle:"e"},
        { id: "vid4", videosrc: "Topic 4" ,videoTitle:"r"},
        { id: "vid5", videosrc: "Topic 5" ,videoTitle:"t"},
        { id: "vid6", videosrc: "Topic 6" ,videoTitle:"y"},
      ];
      console.log(dataArray,"array")

      
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
            onClick={(t:any)=>{handleClick(`${data.id}`)}}>
                {data.videoTitle}
            </div>
        )}
        )}
        </div>

        <div>
        <video />

        </div>
        </>
    )
}