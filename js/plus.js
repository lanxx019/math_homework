App = Ember.Application.create();

App.Router.map(function() {
  // put your routes here
});

App.IndexRoute = Ember.Route.extend({
  model: function() {
    var result = [];
    for (var i = 0; i < 8; i++) {
      var line = [];
      for (var j = 0; j < 5; j++) {
        const seed = 500;
        var item = {};
        item.op = '+';
        item.first = safeRandom(seed);
        item.second = safeRandom(seed);
        if (Math.random() < 0.5) {
          item.op = '-';
          item.second = safeRandom(item.first);
        }
        line.push(item);
      }
      result.push(line);
    }
    return result;
  }
});

function safeRandom(seed) {
  var result = betterRandom(seed);
  while (result == 0 && seed != 1) {
    result = Math.floor(betterRandom(seed));
  }
  return result;
}

function betterRandom(seed) {
  return crypto.getRandomValues(new Uint32Array(1))[0] % seed;
}

