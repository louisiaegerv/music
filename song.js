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
	let htmlString = (this.isPlaying ? `<li class="current">` : `<li>`);
	htmlString += `
			<img src="${this.img}"/>
			${this.title} - ${this.artist}
			<span class="duration">${this.duration}</span
		</li>
	`;
	return htmlString;
}