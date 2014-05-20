define(["marionette",
        "../models/ProjectModel"], function(Marionette, Project ) {

    var Projects = Backbone.Collection.extend({
        initialize : function(options) {
          this.client_id = options.client_id;
        },
        url: function() {
          return 'http://silex.7sabores.com/rest/client/' + this.client_id + '/projects';
        },
        model: Project
    });

    return Projects;

});
