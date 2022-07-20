
let timeId="timer";

let hourStart = 0;
let minStart = 0;
let secStart = 0;

let hour;
let min;
let sec;


function initializeTimer() {
    
      let date = new Date();

      
      hourStart = -Number(date.getHours());
      minStart = -Number(date.getMinutes());
      secStart = -Number(date.getSeconds());


      hour = hourStart;
      min = minStart;
      sec = secStart;

      
     
      let currentTime = "00:00:00" ;

      

      document.getElementById(timeId).innerHTML = currentTime;
      //play();
}


  function showInterval() {
    
    let date = new Date(); /* creating object of Date class */
    let hour = date.getHours() + hourStart;
    let min = date.getMinutes() + minStart;
    let sec = date.getSeconds() + secStart;

    if (sec < 0) {
        sec = sec + 60;
        min = min - 1;
    }
    if (min < 0) {
        min = min + 60;
        hour = hour - 1;
    }
    if (hour < 0 ) {
        hour = hour + 12;
    }

    sec = sec < 0 ? sec + 60 : sec;
    min = min < 0 ? min + 60 : min;
    hour = hour < 0 ? hour + 12 : hour;


    hour = hour < 10 ? "0" + hour : hour;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;
 
    let currentTime = hour + ":" + min + ":" + sec ;
    document.getElementById("timer").innerHTML = currentTime;

}


function play() {
    let myMusic= document.getElementById("music");
    myMusic.play();
}

function pause() {
    let myMusic= document.getElementById("music");
    myMusic.pause();
}


function initializeTimer() {
    
      let date = new Date();

      
      hourStart = -Number(date.getHours());
      minStart = -Number(date.getMinutes());
      secStart = -Number(date.getSeconds());


      hour = hourStart;
      min = minStart;
      sec = secStart;

      
     
      let currentTime = "00:00:00" ;

      

      document.getElementById(timeId).innerHTML = currentTime;
      //play();
}


  function showInterval() {
    
    let date = new Date(); /* creating object of Date class */
    let hour = date.getHours() + hourStart;
    let min = date.getMinutes() + minStart;
    let sec = date.getSeconds() + secStart;

    if (sec < 0) {
        sec = sec + 60;
        min = min - 1;
    }
    if (min < 0) {
        min = min + 60;
        hour = hour - 1;
    }
    if (hour < 0 ) {
        hour = hour + 12;
    }

    sec = sec < 0 ? sec + 60 : sec;
    min = min < 0 ? min + 60 : min;
    hour = hour < 0 ? hour + 12 : hour;


    hour = hour < 10 ? "0" + hour : hour;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;
 
    let currentTime = hour + ":" + min + ":" + sec ;
    document.getElementById("timer").innerHTML = currentTime;

}
