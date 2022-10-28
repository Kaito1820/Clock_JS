function showTime(){
    var date = new Date();
    var hour = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    var state = "AM";
    if(hour > 12){
        hour = hour - 12;
        state = "PM";
    }
    if(hour > 0 && hour < 10){
        hour = "0" + hour;
    }
    else hour = hour;
    if(minutes < 10){
        minutes = "0" + minutes;
    }
    else minutes = minutes;
    if(seconds < 10){
        seconds = "0" + seconds;
    }
    else seconds = seconds;
    var time = hour + ':' + minutes + ':' + seconds + ' ' + state;
    // document.getElementById("clock").innerText = time;
    document.getElementById("clock").textContent = time;
    
    setTimeout(showTime, 1000);
}

showTime();