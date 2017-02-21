/* SONG SECTION*/

function Song(title, artist, duration, src) {
	this.title = title;
	this.artist = artist;
	this.duration = duration;
	this.src = new Audio(src);
	this.img = "img/cover.jpg";
	this.isPlaying = false;
}
Song.prototype.play = function() {
	this.isPlaying = true;
	this.src.play();
}
Song.prototype.pause = function() {
	this.isPlaying = false;
	this.src.pause();
}
Song.prototype.stop = function() {
	this.isPlaying = false;
	this.src.pause();
	this.src.currentTime = 0;
}
Song.prototype.toHTML = function() {
	let htmlString = `<li`;
	if(this.isPlaying) {
		 htmlString+= ` class="current"`;
	}
	htmlString += `>`;
	htmlString += `<img src="${this.img}"/>`
	htmlString += `${this.title} - ${this.artist}`;
	htmlString += `<span class="duration">`;
	htmlString += `${this.duration}</span>`;
	htmlString += `</li>`;
	
	return htmlString;
}


/* PLAYLIST SECTION */

function Playlist() {
	this.songs = [];
	this.nowPlayingIndex = 0;
}
Playlist.prototype.add = function(song) {
	this.songs.push(song);
}
Playlist.prototype.play = function() {
	let currentSong = this.songs[this.nowPlayingIndex];
	currentSong.play();
}
Playlist.prototype.pause = function() {
	let currentSong = this.songs[this.nowPlayingIndex];
	currentSong.pause();
}
Playlist.prototype.stop = function() {
	let currentSong = this.songs[this.nowPlayingIndex];
	currentSong.stop();
	
}
Playlist.prototype.next = function() {
	this.stop();
	this.nowPlayingIndex++;
	if(this.nowPlayingIndex === this.songs.length) { 
		this.nowPlayingIndex = 0; 
	}
	this.play();
}
Playlist.prototype.previous = function() {
	this.stop();
	this.nowPlayingIndex--;
	// if on first song in playlist
	if(this.nowPlayingIndex < 0) { 
		// set to last song
		this.nowPlayingIndex = this.songs.length - 1; 
	}
	this.play();
}
Playlist.prototype.renderInElement = function(list) {
	list.innerHTML = '';
	this.songs.forEach((song) => {
		list.innerHTML += song.toHTML();
	});
}



let playlist = new Playlist();
let song1 = new Song("Overture", "Daft Punk", "2.28", "music/overture.mp3");
let song2 = new Song("The Grid", "Daft Punk", "1:37", "music/grid.mp3");
let song3 = new Song("Son of Flynn", "Daft Punk", "1:35", "music/son.mp3");
let song4 = new Song("Armory", "Daft Punk", "2:03", "music/armory.mp3");

playlist.add(song1);
playlist.add(song2);
playlist.add(song3);
playlist.add(song4);

let playlistElement = document.querySelector('.playlist');

playlist.renderInElement(playlistElement);

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
	playlist.renderInElement(playlistElement);
});

let stopButton = document.querySelector('#stop');
stopButton.addEventListener('click', () => {
	playlist.stop();
	playlist.renderInElement(playlistElement);
});
let prevButton = document.querySelector('#prev');
prevButton.addEventListener('click', () => {
	playlist.previous();
	playlist.renderInElement(playlistElement);
});
let nextButton = document.querySelector('#next');
nextButton.addEventListener('click', () => {
	playlist.next();
	playlist.renderInElement(playlistElement);
});