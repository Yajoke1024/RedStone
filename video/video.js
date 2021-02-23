var video=document.querySelector("video");
var play=document.getElementsByClassName("switch")[0];
var expand=document.getElementsByClassName("expand")[0];
var progress=document.getElementsByClassName("progress")[0];
var line=document.getElementsByClassName("line")[0];
var currPlayTime=document.getElementsByClassName("current")[0];
var totalTime=document.getElementsByClassName("total")[0];
var img=document.getElementById("img");

video.oncanplay=function(){
    this.style.display="block";
    totalTime.innerHTML=getTime(this.duration);
}

play.onclick=function(){
    if(video.paused){
        video.play();
        img.src="./image/stop.png"
    }else{
        video.pause();
        img.src="./image/begin.png"
    }
    this.classList.toggle("fa-pause");
}

expand.onclick=function(){
    video.webkitRequestFullScreen();
}

video.ontimeupdate = function(){
    var currTime = this.currentTime;
    var duration = this.duration;
    var pre = currTime / duration * 100 + "%";
    line.style.width = pre;
    currPlayTime.innerHTML = getTime(currTime);
}


progress.onclick=function(e){
    var event=e||window.event;
    video.currentTime=(event.offsetX/this.offsetWidth)*video.duration;
}

video.onended=function(){
    var that=thie;
    play.classList.remove("fa-pause");
    play.classList.add("fa-play");
    line.style.width=0;
    currPlayTime.innerHTML=getTime();
    that.currentTime=0
}

function getTime(time){
    var time=time||0;
    var h=parseInt(time/3600);
    var m=parseInt(time%3600/60);
    var s=parseInt(time%60);
    h=h<10?"0"+h:h;
    m=m<10?"0"+m:m;
    s=s<10?"0"+s:s;
    return h+":"+m+":"+s;
}


