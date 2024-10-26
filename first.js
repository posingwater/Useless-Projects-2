document.getElementById('playMusic').addEventListener('click', function() {
    const mood = document.getElementById('moodSelect').value;
    const audioPlayer = document.getElementById('audioPlayer');
    const musicSource = document.getElementById('musicSource');

    switch(mood) {
        case 'happy':
            musicSource.src = 'happy-music.mp3'; // Replace with your music file
            break;
        case 'sad':
            musicSource.src = 'sad-music.mp3'; // Replace with your music file
            break;
        case 'angry':
            musicSource.src = 'angry-music.mp3'; // Replace with your music file
            break;
        case 'relaxed':
            musicSource.src = 'relaxed-music.mp3'; // Replace with your music file
            break;
        case 'energetic':
            musicSource.src = 'energetic-music.mp3'; // Replace with your music file
            break;
        default:
            alert('Please select a mood.');
            return;
    }

    audioPlayer.load();
    audioPlayer.play();
});
