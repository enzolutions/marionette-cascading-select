require.config({
  baseUrl: 'vendor',
  paths : {
    backbone : 'backbone',
    underscore : 'underscore',
    jquery : 'jquery',
    'jquery-ui' : 'jquery-ui',
    text: 'text',
    marionette : 'backbone.marionette',
    wreqr : 'backbone.wreqr',
    eventbinder : 'backbone.eventbinder',
    babysitter : 'backbone.babysitter',
    datepicker: 'jquery.ui.datepicker.min'
  },
  shim : {
    jquery : {
      exports : 'jQuery'
    },
    'jquery-ui' : {
      deps : ['jquery'],
    },
/*    datepicker: {
      deps : ['jquery','jquery-ui'],
    },*/
    underscore : {
      exports : '_'
    },
    backbone : {
      deps : ['jquery', 'underscore'],
      exports : 'Backbone'
    },
    wreqr: {
      deps : ['backbone'],
      exports: 'Backbone.Wreqr'
    },
    eventbinder : {
      deps : ['backbone']
    },
    babysitter : {
      deps: ['backbone']
    },
    marionette : {
      deps: ['wreqr', 'eventbinder', 'babysitter'],
      exports : 'Marionette'
    }
  }
});

// Loading dependences and module to execute Marionette App
require( ["jquery-ui",
          "marionette",
          "../modules/RouterModule",
          "../modules/ControllerModule",
          "../modules/EventAggregatorModule",
          "../views/HeaderView",
          "../views/FooterView",],
          function (jQueryUI, Marionette, RouterModule, ControllerModule, EventAggregatorModule, HeaderView, FooterView) {
    // set up the app instance
    var MyApp = new Marionette.Application();

    // Define regions
    MyApp.addRegions({
      headerRegion: "#header-region",
      toolbarRegion: "#toolbar-region",
      mainRegion: "#main-region",
      footerRegion: '#footer-region'
    });

    // Initialize the app controller
    // Pass reference to Main Region to Controller
    var controller = new ControllerModule({
      mainRegion: MyApp.mainRegion,
      vent: MyApp.vent
    });

    // initialize the router
    MyApp.router = new RouterModule({
      controller : controller,
    });

    // Initialize the app router if neccessary
    MyApp.addInitializer(function(options) {});

    MyApp.on("initialize:after", function() {

      // Createing a generic ItemView for Header
      headerView = new HeaderView({router: MyApp.router});

      // Add Header View to region to be render
      MyApp.headerRegion.show(headerView);

      // Creating a generic ItemView for Footer
      footerView = new FooterView();

      // Add Header View to region to be render
      MyApp.footerRegion.show(footerView);

      // Start Backbone history a necessary step for bookmarkable URL's
      Backbone.history.start();

    });

    MyApp.start({});
});
