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
        var item = {};
        item.first = Math.floor((Math.random()*15));
        item.second = Math.floor((Math.random()*15));
        item.op = '+';
        line.push(item);
      }
      result.push(line);
    }
    return result;
  }
});
