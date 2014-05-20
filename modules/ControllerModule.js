define(["marionette",
        "../views/MainView",
        "../views/ProjectsView",
        "../views/TasksView",
        "../collections/ClientsCollection",
        "../collections/ProjectsCollection",
        "../collections/TasksCollection"],
        function (Marionette, MainView, ProjectsView, TasksView, Clients, Projects, Tasks) {

    var Controller = Marionette.Controller.extend({
        initialize : function(options) {
          // store a region that will be used to show the stuff rendered by this component
          this.mainRegion = options.mainRegion;
          // store EventManager
          this.vent = options.vent;
        },
        start: function() {
            //TODO: code to start
        },

        /**
         * Initialized on start, without hash
         * @method
         */
         home :  function () {

            var clients = new Clients();

            var mainView = new MainView({ collection: clients , vent: this.vent });

            // Create a new variable for vent to enable be accessible in trigger response
            var vent = this.vent;

            // Get data and wait clients before render
            clients.fetch({
              update: true ,
              success: function (clients) {
                // Add View to region to be render
                this.mainRegion.show(mainView);

              }.bind(this)
            });

            // Handle projects based in client selection.
            this.vent.on("myapp:projects", function(client){

              if (client > 0) {

                var projects = new Projects({ client_id: client });

                projectsView = new ProjectsView({ collection: projects , vent: vent });

                // Get data and wait clients before render
                projects.fetch({
                  update: true ,
                  success: function (projects) {
                    // Add View to region to be render
                    mainView.projects.show(projectsView);

                  }
                });
              } else {
                HelloView.projects.close();
                HelloView.tasks.close();
              }
            });

            // Handle tasks based in project selection.
            this.vent.on("myapp:tasks", function(project){

              if (project > 0) {

                var tasks = new Tasks({ project_id: project });

                tasksView = new TasksView({ collection: tasks});

                // Get data and wait clients before render
                tasks.fetch({
                  update: true ,
                  success: function (tasks) {
                    // Add View to region to be render
                    mainView.tasks.show(tasksView);

                    // Enable Date Picker
                    jQuery( "#task_date" ).datepicker();

                  }.bind(this)
                });
              } else {
                mainView.tasks.close();
              }
            });
        },
    });

    return Controller;
});
