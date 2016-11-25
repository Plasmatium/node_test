function obj(x,y,z) {
  var p1, p2, p3;
  p1 = x;
  p2 = y;
  p3 = z;

  var self = {
    get p1() {
      console.log('p1 is ', p1);
      return p1;
    },
    set p1(v) {
      console.log('set p1 to ', v);
      p1 = v;
    }
  };

  return self;
}

x = obj(1,2,3);
console.log(x.p1);
