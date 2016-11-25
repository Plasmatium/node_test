require('./method');
/*/
var myMammal = {
  name: 'Herb the Mammal',
  get_name: function() {
    return this.name;
  },
  says: function() {
    return this.saying || '';
  }
};

var myCat = Object.create(myMammal);
myCat.name = 'Henrietta';
myCat.saying = 'meow';
myCat.purr = function(n) {
  return 'r'.repeat(n).split('').join('-');
};
myCat.get_name = function() {
  return this.says() + ' ' + this.name + ' ' + this.says();
};

console.log();
//*/

//*/
Object.method('superior', function(name) {
  var that = this,
    method = that[name];
  return function() {
    return method.apply(that, arguments);
  };
});

var mammal = function(spec) {
  var that = {};
  that.get_name = function() {
    return spec.name;
  };
  that.says = function() {
    return spec.saying || '';
  };
  return that;
};



spec = {
  name: 'Herb'
};

myMammal = mammal(spec);

var cat = function(spec) {
  spec.saying = spec.saying || 'meow';
  var that = mammal(spec);
  that.purr = function(n) {
    return 'r'.repeat(n).split('').join('-');
  };
  that.get_name = function() {
    return that.says() + ' ' + spec.name +
      ' ' + that.says();
  }
  return that;
};

var myCat = cat({
  name: 'Henrietta'
});
//*/

console.log(myCat.superior('purr')(5))
console.log(Function.prototype)

exports.mammal = mammal;
