//  get elements
 const dayEl=document.getElementById('days');
 const hourEl= document.getElementById('hours');
 const minutesEl = document.getElementById('minutes');
 const secondsEl = document.getElementById('seconds');



// functions
function countDown(){

  // end date
  const date = new Date('jan 01, 2023 00:00:00');



  // current date
  const current = new Date().getTime();

  // difference
  const diff = date - current;
  console.log(diff)
  
  let timeDays = Math.floor(diff/1000/60/60/24);
  
  let timeHours = Math.floor((diff/1000/60/60)%24);
  
  let timeMinutes =Math.floor((diff/1000/60)%60);
  
  let timeSeconds = Math.floor((diff/1000)%60);
  



  dayEl.innerHTML=timeDays;
  hourEl.innerHTML=timeHours;
  minutesEl.innerHTML=timeMinutes;
  secondsEl.innerHTML=timeSeconds;
  
}
setInterval(countDown,1000)

