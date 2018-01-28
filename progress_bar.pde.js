var ProgressBar = function(position) {
	this.position = position;
	this.display_length = 200;
	this.display_width = 30;
	
	this.max_fill = 200;
	this.fill = 50;
};
ProgressBar.prototype.draw = function() {
	fill(0);
	rect(this.position.x, this.position.y,
		this.display_length, this.display_width ,5);
	fill(255,0,0);
	rect(this.position.x + 3, this.position.y + 3,
		(this.display_length-6) * (this.fill / this.max_fill), this.display_width - 6,5);
};
