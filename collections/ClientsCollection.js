define(["marionette",
        "../models/ClientModel"], function(Marionette, Client ) {

    var Clients = Backbone.Collection.extend({
                url: 'http://localhost:8081/rest/clients',
                model: Client
    });

    return Clients;

});
