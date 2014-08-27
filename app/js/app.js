App = Ember.Application.create();

App.Router.map(function() {
  // put your routes here
});

App.IndexRoute = Ember.Route.extend({
});

App.IndexController = Ember.Controller.extend({
  shape: "",

  actions: {
    drawScene: function() {
      paper.setup('paperScene');
      this.set('shape', new paper.Shape.Circle(new paper.Point(80, 50), 30));
      this.shape.strokeColor = '#0000aa';
      paper.view.draw();
    }
  }
});


App.IndexView = Ember.View.extend({
	didInsertElement: function() {
    this.controller.send('drawScene');
	}
});
