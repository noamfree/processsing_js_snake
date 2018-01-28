void setup()
{
  size(800,800);
  
}

var pb = new ProgressBar(new PVector(200, 300)); 

void draw(){
  pb.draw();
  pb.fill(1);
}