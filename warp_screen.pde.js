var Drawer = function() {
    this.x = 0;
};
Drawer.prototype.ellipse = function(x,y,w,h) {
    ellipse(x,y,w,h);
};

Drawer.prototype.line = function(x,y,w,h) {
    line(x,y,w,h);
};

var WarpScreen = function(x,y,w,h){
    this.x = x;
};
WarpScreen.prototype = Object.create(Drawer.prototype);

WarpScreen.prototype.ellipse = function(x,y,w,h){
    // if CORNERS, fix second point.
    var p = this.point_to_screen(x,y);
    x = p.x;
    y = p.y;
    // for CENTER
    var right = x+w > width;
    var left = x-w < 0;
    var down = y+h > height;
    var up = y-h < 0;

    ellipse(x,y,w,h);
    if (left)
        { ellipse(x+width,y,w,h); }
    if (right)
        { ellipse(x-width,y,w,h); }
    if(up)
        {ellipse(x,y + height,w,h);}
    if (down)
        {ellipse(x,y - height,w,h);}
    if (left && up) {
        ellipse(x+width,y + height,w,h);}
    if (left && down) {
        ellipse(x+width,y - height,w,h);}
    if (right && up) {
        ellipse(x-width,y + height,w,h);}
    if (right && down) {
        ellipse(x-width,y - height,w,h);}
};


WarpScreen.prototype.point_to_screen = function(x,y){
    x = mod(x, width);
    y = mod(y,height);
    return new PVector(x,y);
};
