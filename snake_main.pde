void setup()
{
  size(800,800);
  ellipseMode(CENTER);
  
}

var random_food = function() {return new Food(new PVector(random(0,400),
random(0,400)));};

var close_to = function(p1, p2, l) {
	//console.log(p1 + " " + p2);
	//var v = PVector.sub(p1,p2)
	//console.log(v);
	return PVector.sub(p1,p2).mag() < l;
};

var food = [random_food()];
var v = new PVector(100,100);
var s = new Snake(v, 5);
void draw(){
	background(180);
	s.move();
	s.draw();  
	for (var i=0; i<food.length; i++) {
		food[i].draw();
	};
	if (close_to(s.head.position, food[0].position, (10 + s.head.size)/2)) {
		food[0] = random_food();
		s.grow();
	}
}

var RIGHT_KEY = 39;
var LEFT_KEY = 37;
var STEER_AMOUNT = 0.1;

void keyPressed() {
	// left
	if (keyCode === LEFT_KEY) {
		s.head.steer(-STEER_AMOUNT);
	}
	if (keyCode === RIGHT_KEY) {
		s.head.steer(STEER_AMOUNT);
	}
}