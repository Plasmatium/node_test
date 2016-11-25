Function.prototype.method = function(name, func) {
  console.log(this);
  this.prototype[name] = func;
  return this;
};

Array.prototype.fill = (dim, init) => {
  console.log(this);
  for (var i = 0; i < dim; i++) {
    this.push(init);
  }
  return this;
}

function log(x) {
  console.log(x);
}

log.method('test', () => console.log('test'))
a = [];
a.fill(3, 4)
