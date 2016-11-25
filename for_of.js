var randoms = {
  [Symbol.iterator]: function() {
    return {
      next: function() {
        return {
          value: Math.random()
        };
      }
    };
  }
};
var randoms_pool = [];
for (var n of randoms) {
  randoms_pool.push(n);
  // 防止无限运行！
  if (randoms_pool.length === 100) break;
}

console.log(randoms_pool);
