
var zero_vector = function() {return new PVector(0,0);};

var Mover = function(position, velocity_limit) {
	// TODO: refactor out thte copying!
	this.position = new PVector(position.x, position.y);
	this.velocity = zero_vector(0,0);
	this.acceleration = zero_vector(0,0);
	
	this.velocity_limit = velocity_limit;
}

Mover.prototype.move = function() {
	this.position.add(this.velocity);
	this.velocity.add(this.acceleration);
	
	if(this.velocity_limit);
	this.velocity.limit(this.velocity_limit);
	this.acceleration.mult(0);
};

Mover.prototype.heading_angle = function() {
	return PVectorUtils.heading(this.velocity);
};

Mover.prototype.steer = function(angle) {
	PVectorUtils.rotate_vector(this.velocity, angle);
};

Mover.prototype.apply_force = function(force) {
	this.acceleration.add(force);
}