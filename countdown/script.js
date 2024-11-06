const hour =document.querySelector("#hours")
const day =document.querySelector("#days")
const minute=document.querySelector("#minutes")
const second=document.querySelector("#seconds")



function UpdateTime() {
    const currentYear=new Date().getFullYear();
    const newYear=new Date(`January  ${currentYear+1} 00:00:00`);
    const currentDate=new Date();
    const diff=newYear-currentDate;
    const d=Math.floor(diff/1000/60/60/24);
    const h=Math.floor((diff/1000/60/60)%24);
    const m=Math.floor((diff/1000/60) %60);
    const s=Math.floor((diff/1000) %60);
    day.innerHTML=d<10?"0"+d:d;//less than 10 irruntha single digit 1st 0va podu athu pakathula d
    hour.innerHTML=h<10?"0"+h:h;
    minute.innerHTML=m<10?"0"+m:m;
    second.innerHTML=s<10?"0"+s:s;
    //console.log(d+" "+h+" "+m+" "+s);
    }
    setInterval(UpdateTime, 1000);
    /*
    1000ms 1s
    60s = 1m
    60m = 1hr
    24hrs 1day
    */