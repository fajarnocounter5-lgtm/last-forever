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

audio.addEventListener("timeupdate", () => {
  console.log(audio.currentTime);
});

const lyrics = [
  { time: 10, text: "I got a feeling that you're twice as shy as me" },
  { time: 14, text: "The feeling always comes and goes with ease" },
  { time: 18, text: "We're too scared to disagree" },
  { time: 22, text: "I'm waiting for you just to intervene" },

  { time: 30, text: "Cause I just want to say that it's all right and" },
  { time: 34, text: "Let me hold you close" },
  { time: 38, text: "But I'm carrying this discipline" },
  { time: 42, text: "I'm moving to the coast" },
  { time: 46, text: "So it's better when you tell me things" },
  { time: 50, text: "Like I should go alone" },

  { time: 55, text: "Oh I just wanna be there when you're driving ninety nine" },
  { time: 60, text: "The way I catch a glimpse of us is only when we lie" },
  { time: 65, text: "I guess I'll just miss somebody" },

  { time: 75, text: "I can't tell if you're flirting or you're tryna piss me off" },
  { time: 80, text: "We're kissing in my brother's room but something feels so wrong" },
  { time: 85, text: "Maybe cause the laughing's gone" },

  { time: 95, text: "Cause I just want to say that it's all right and" },
  { time: 100, text: "Let me hold you close" },

  { time: 120, text: "Oh I just wanna be there when I'm driving ninety nine" },
  { time: 125, text: "The way I catch a glimpse of us is only when we lie" },

  { time: 160, text: "Oh baby baby baby is there something I should know" },
  { time: 170, text: "And I guess I'm never getting well" }
];
