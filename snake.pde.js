var SNAKE_HEAD_DEFAULT_SIZE = 20
var SNAKE_HAED_INITIAL_VELOCITY = function(){return new PVector(2,0);};
var SNAKE_HEAD_COLOR = color(50,255,50);


// SNAKE HEAD
//{
var  SnakeHead = function(position, size) {
	Mover.call(this, position);
	if (size === undefined) { size = SNAKE_HEAD_DEFAULT_SIZE;}
	this.size = size;
	this.velocity = SNAKE_HAED_INITIAL_VELOCITY();
};

SnakeHead.prototype = Object.create(Mover.prototype);

SnakeHead.prototype.draw = function() {
	fill(SNAKE_HEAD_COLOR);
	ellipse(this.position.x, this.position.y, this.size, this.size);
	line_by_point_len_angle(this.position.x,
		this.position.y,
		this.size/2,
		this.heading_angle());
};
//}

var SNAKE_PART_DEFAULT_SIZE = 20
var SNAKE_PART_COLOR = color(50,255,50);
var DAMPING = 1 ;
// SNAKE PART
//{
var  SnakePart = function(position, to_follow, size) {
	Mover.call(this, position);
	if (size === undefined) {size = SNAKE_PART_DEFAULT_SIZE;}
	this.size = size;
	this.to_follow = to_follow;
};
SnakePart.prototype = Object.create(Mover.prototype);

SnakePart.prototype.draw = function() {
	fill(SNAKE_PART_COLOR);
	ellipse(this.position.x, this.position.y, this.size, this.size);
};

SnakePart.prototype.move = function() {
	var f = PVector.sub(this.to_follow.position, this.position);
	f.div(10);
	f.sub(PVector.mult(this.velocity, DAMPING))
	this.apply_force(f);
	// factor out the Mover name!!
	Mover.prototype.move.call(this);
}; 
//}

var Snake = function(position, length) {
	this.head = new SnakeHead(position);
	this.tail = this.head;
	this.parts = [this.head];
	for (var i=1; i<length; i++) {
		this.grow();
	}	
	
};

Snake.prototype.draw = function() {
	for (var i=this.parts.length-1; i>=0; i--) {
		this.parts[i].draw();
	}
};

Snake.prototype.move = function() {
	for (var i=this.parts.length-1; i>=0; i--) {
		this.parts[i].move();
	}
};
Snake.prototype.grow = function() {
	var part = new SnakePart(this.tail.position, this.tail);
	this.parts.push(part);
	this.tail = part;
};
