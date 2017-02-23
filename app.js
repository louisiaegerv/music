// Instantiate playlist obj and 4 song obj's
let playlist = new Playlist();
let song1 = new Song("Overture", "Daft Punk", "2.28", "music/overture.mp3");
let song2 = new Song("The Grid", "Daft Punk", "1:37", "music/grid.mp3");
let song3 = new Song("Son of Flynn", "Daft Punk", "1:35", "music/son.mp3");
let song4 = new Song("Armory", "Daft Punk", "2:03", "music/armory.mp3");

// Add 4 song Obj's to songs array
playlist.add(song1);
playlist.add(song2);
playlist.add(song3);
playlist.add(song4);

let playlistHTMLElement = document.querySelector('.playlist');

// Display songs in playlist html element
playlist.renderInElement(playlistHTMLElement);

let playButton = document.querySelector('#play');
playButton.addEventListener('click', () => {
	if (playButton.classList.contains('play')) {
		playlist.play();
		playButton.textContent = "Pause";
		playButton.classList.remove('play');
		playButton.classList.add('pause');
	} else if (!playButton.classList.contains('play')) {
		playlist.pause();
		playButton.textContent = "Play";
		playButton.classList.remove('pause');
		playButton.classList.add('play');
	}
	playlist.renderInElement(playlistHTMLElement);
});

let stopButton = document.querySelector('#stop');
stopButton.addEventListener('click', () => {
	playlist.stop();
	playlist.renderInElement(playlistHTMLElement);
});
let prevButton = document.querySelector('#prev');
prevButton.addEventListener('click', () => {
	playlist.previous();
	playlist.renderInElement(playlistHTMLElement);
});
let nextButton = document.querySelector('#next');
nextButton.addEventListener('click', () => {
	playlist.next();
	playlist.renderInElement(playlistHTMLElement);
});

let playToggle = (songSrc) => {
	playlist.play();
}