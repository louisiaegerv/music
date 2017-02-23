function Playlist() {
	this.songs = [];
	this.nowPlayingIndex = 0;
}
Playlist.prototype.add = function(song) {
	this.songs.push(song);
};
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
Playlist.prototype.renderInElement = function(listHTMLElement) {
	listHTMLElement.innerHTML = '';
	this.songs.forEach((song) => {
		listHTMLElement.innerHTML += song.toHTML();
	});
}