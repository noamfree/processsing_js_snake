var ProgressBar = function(position) {
	this.position = position;
	this.display_length = 200;
	this.display_width = 30;
	
	this.max_fill = 200;
	this.amount = 50;
};

ProgressBar.prototype.draw = function() {
	fill(0);
	rect(this.position.x, this.position.y,
		this.display_length, this.display_width ,
		15);
	fill(255,0,0);
	rect(this.position.x + 3, this.position.y + 3,
		(this.display_length-6) * (this.amount / this.max_fill), this.display_width - 6,10);
};


ProgressBar.prototype.fill = function(amount) {
	if (amount === undefined) {amount = this.max_fill;}
	this.amount += amount;
	this.amount = constrain(this.amount, 0, this.max_fill);
};

ProgressBar.prototype.empty = function(amount) {
	if (amount === undefined) {amount = this.max_fill;}
	this.fill(-amount);
};