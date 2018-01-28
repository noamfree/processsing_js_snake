var mod = function(x,m) {
    return ( (x%m) + m) % m;
};

var mod_distance = function(x, y, m) {
    x = mod(x,m);
    y = mod(y,m);
    return min(abs(x-y), m - abs(x-y));
};