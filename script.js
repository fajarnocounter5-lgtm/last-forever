let song = document.getElementById("song");
let progress = document.getElementById("progress");
let playBtn = document.getElementById("playBtn");

song.onloadedmetadata = function(){
    progress.max = song.duration;
    progress.value = song.currentTime;
}

playBtn.onclick = function(){

    if(song.paused){
        song.play();
        playBtn.innerHTML = "⏸";
    }else{
        song.pause();
        playBtn.innerHTML = "▶";
    }

}

if(song.play()){
setInterval(()=>{
progress.value = song.currentTime;
},500)
}

progress.onchange = function(){
song.currentTime = progress.value;
song.play();
playBtn.innerHTML = "⏸";
}

function nextSong(){
song.currentTime = 0;
song.play();
playBtn.innerHTML = "⏸";
}

function prevSong(){
song.currentTime = 0;
song.play();
playBtn.innerHTML = "⏸";
}
