var memoizer = function(memo, fundamental) {
  var shell = function(n) {
    var result = memo[n];
    if (typeof result !== 'number') {
      result = fundamental(shell, n);
      memo[n] = result;
    }
    return result;
  };
  return shell;
};

var factorial = memoizer([1, 1], function(shell, n) {
  return n * shell(n - 1);
});

console.log(factorial(100));
