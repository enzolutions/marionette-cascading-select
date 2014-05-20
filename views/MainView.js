define(["marionette",
        "text!../templates/main.tpl"], function(Marionette, mainTpl ) {

    var HelloView = Backbone.Marionette.Layout.extend({
      initialize: function(options){
            // Store EventAgreegator
            this.vent = options.vent;
      },
      events: {
        "change #select_clients": "clientSelected",
      },
      template : _.template(mainTpl),
      regions: {
        projects: "#projects-region",
        tasks: "#tasks-region"
      },
      clientSelected : function (e) {
        e.preventDefault();
        var client = this.$el.find('select').val();
        // Trigger event to update project
        this.vent.trigger("myapp:projects", client);
        this.vent.trigger("myapp:tasks", 0);

      },
    });

    return HelloView;

});
