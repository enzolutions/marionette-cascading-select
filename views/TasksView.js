define(["marionette",
        "text!../templates/tasks.tpl"], function(Marionette, tasksTpl ) {

    var TasksView = Backbone.Marionette.ItemView.extend({
      template : _.template(tasksTpl),
    });

    return TasksView;

});
