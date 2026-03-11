<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>LANY - Last Forever</title>
<link rel="stylesheet" href="style.css">
</head>

<body>

<div class="container">

<div class="music-player">

<img src="last.jpeg" class="cover">

<h2>Last Forever</h2>
<h3>LANY</h3>

<audio id="song">
<source src="LANY-Last Forever.mp3" type="audio/mpeg">
</audio>

<input type="range" value="0" id="progress">

<div class="controls">

<button onclick="prevSong()">⏮</button>

<button id="playBtn">▶</button>

<button onclick="nextSong()">⏭</button>

</div>

</div>

</div>
