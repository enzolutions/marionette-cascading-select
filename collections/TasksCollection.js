define(["marionette",
        "../models/TaskModel"], function(Marionette, Task ) {

    var Tasks = Backbone.Collection.extend({
        initialize : function(options) {
          this.project_id = options.project_id;
        },
        url: function() {
          return 'http://localhost:8081/rest/project/' + this.project_id + '/tasks';
        },
        model: Task
    });

    return Tasks;

});
