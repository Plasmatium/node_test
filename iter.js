function iter(obj) {
  var iterator = {};

  _loop_helper = function(func, gather_rslt) {
    var idx = 0,
      value = obj.next(),
      rslt = [];
    while (value !== undefined) {
      r = func(value, idx);
      if (gather_rslt === true) {
        rslt.push(r);
      }
      idx++;
      value = obj.next();
    }
    if (gather_rslt === true) {
      return rslt;
    }
  }

  iterator.loop = function(func) {
    _loop_helper(func, false);
  }
  iterator.map = function(func) {
    return _loop_helper(func, true);
  }

  return iterator;
}

function range() {
  //assign begin, end, step
  var begin, step, end;
  if (arguments.length == 1) {
    begin = 0;
    step = 1;
    end = arguments[0];
  } else if (arguments.length == 2) {
    begin = arguments[0];
    end = arguments[1];
    step = 1;
  } else {
    [begin, end, step] = arguments;
  }

  r = {};
  var curr_value = null;

  r.toString = function() {
    console.log(`from ${begin} to ${end}, step: ${step}`);
  }

  r.next = function() {
    if (curr_value === null) {
      curr_value = begin;
      return curr_value;
    }

    if (curr_value === undefined) {
      console.log('Iterator exhausted!');
      return;
    }

    curr_value += step;
    if (curr_value >= end) {
      curr_value = undefined;
    }

    return curr_value;
  }

  return iter(r);
}

r = range(0, 2 * Math.PI, 0.01).map(Math.sin);
console.log(r);
