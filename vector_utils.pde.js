var rotate_vector = function(v, angle) {
	var x = cos(angle)*v.x - sin(angle) * v.y;
	var y = sin(angle)*v.x + cos(angle) * v.y;
	v.x=x;
	v.y=y;
};

var vector_heading = function(v) {
	return Math.atan2(v.y, v.x);
}


var PVectorUtils = {
	rotate_vector: rotate_vector,
	heading: vector_heading	
	
};