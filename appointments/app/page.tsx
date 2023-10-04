'use client'
export default function Home() {
  // const d =new Date();
  // let day = d.getDate();
  // console.log(day,"day")
  // let time = d.getTime();
  // console.log(time,"time")
  // var datetime = ("2000-01-01 01:00:00 UTC");
var d1 = new Date();
var minute = d1.getMinutes();
var hour = d1.getHours();
// console.log(d1,"d1",minute,"min",hour,"hr")
// if(minute > 0)  
//      alert(hour+"."+minute);
// else
//      alert(hour);
// const date = Date().slice(16,21);
// console.log(date,"new");

// const datetime = (new Date().getTime() + 60 * 60 * 24 * 1000);
// console.log(datetime,"qw")
// var day = new Date('Oct 30, 2000');
// console.log(day); // Apr 30 2000

// var nextDay = new Date(day);
// nextDay.setDate(day.getDate() + 1);
// console.log(nextDay); // May 01 2000  

// var today = new Date();
// var priorDate = new Date(new Date().setDate(today.getDate() + 30));

// console.log(today,'today')
// console.log(priorDate,"prior");

// let now = new Date()
// console.log('Today: ' + now.toUTCString())
// let next30days = new Date(now.setDate(now.getDate() + 30))
// console.log('Next 30th day: ' + next30days.toUTCString())
  
const now = new Date();
const day2 = new Date(now.setDate(now.getDate() + 30))
console.log(day2,"day2")


return (
   <>
  <div style={{ textAlign: 'center', textDecorationLine: 'underline',color:'darkmagenta',fontSize:"20px",fontWeight:"bolder"}}>
  Date & Time
  </div>

  <div>
    {/* {value} */}
  </div>
   </>
  )
}
