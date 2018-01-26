var Food = function(position) {
	this.position = position;
};
Food.prototype.draw = function() {
	fill(255,0,0);
	ellipse(this.position.x, this.position.y, 10, 10);
};