const emotions = ["happy", "sad", "angry", "excited", "anxious", "calm"];
const songs = [
    { name: "Happy Song", file: "Azhake Neeyenne (RaagJatt.com).mp3" },
    { name: "Sad Song", file: "Dailamo-Dailamo.mp3" },
    { name: "Angry Song", file: "Kaadirangi Odivarum (RaagJatt.com).mp3" },
    { name: "Exciting Tune", file: "Naran-K-S-Chithra-Vineeth-Sreenivasan.mp3" },
    { name: "Calm Melody", file: "Kalippu.mp3" }
];

// Get random emotion
const randomEmotion = emotions[Math.floor(Math.random() * emotions.length)];
document.getElementById("emotion").innerText = randomEmotion;

// Get random song
const randomSong = songs[Math.floor(Math.random() * songs.length)];
document.getElementById("song-name").innerText = randomSong.name;

// Set audio source and play
const audioPlayer = document.getElementById("audio-player");
audioPlayer.src = randomSong.file;
audioPlayer.play();
