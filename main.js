let showDate = document.getElementById("date");
let showClock = document.getElementById("clock");


let date = new Date();

let weekDay = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

let monthYear = ["January", "February", "March", "April", "May", "June", "July", "August", 
    "September", "October", "November", "December"];

    showDate.innerHTML = `${weekDay[date.getDay()]}, ${monthYear[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;

    setInterval(()=>{
        let hour = new Date ();
        showClock.innerHTML = hour.toLocaleTimeString();
    },1000)
    



