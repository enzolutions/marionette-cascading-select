define(["marionette",
        "../models/ClientModel"], function(Marionette, Client ) {

    var Clients = Backbone.Collection.extend({
                url: 'http://silex.7sabores.com/rest/clients',
                model: Client
    });

    return Clients;

});
