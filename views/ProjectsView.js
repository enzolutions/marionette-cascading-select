define(["marionette",
        "text!../templates/projects.tpl"], function(Marionette, projectsTpl ) {

    var ProjectsView = Backbone.Marionette.ItemView.extend({
      initialize: function(options){
        // Store EventAgreegator
        this.vent = options.vent;
      },
      template : _.template(projectsTpl),
      events: {
        "change #select_projects": "projectSelected",
      },
      projectSelected : function (e) {
        e.preventDefault();
        var project = this.$el.find('select').val();
        // Trigger event to update tasks
        this.vent.trigger("myapp:tasks", project);
      }
    });

    return ProjectsView;

});
