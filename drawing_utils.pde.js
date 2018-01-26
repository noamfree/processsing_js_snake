var line_by_point_len_angle = function(startx, starty, length, angle){
	line(startx, starty, 
		startx + length*Math.cos(angle), 
		starty + length*Math.sin(angle));
};