Marionette Cascading Select
=======================

Implementation of the typical Ajax example of three level of select elements with dependency, results in selects change based in his parent selection.

This example use the project <a href="https://github.com/enzolutions/marionette-skeleton-app" taget="_blank" >https://github.com/enzolutions/marionette-skeleton-app</a> as start point.

Inside you can find how use Nested Views or Marionette Layout, also the Event Manager is used to trigger the proper event based in used selection.


**DEMO** : <a target="_blank" href="http://enzolutions.github.io/marionette-skeleton-app/">http://enzolutions.github.io/marionette-skeleton-app/</a>

### Usage

This example use a REST API server to get the information related with Clients, Projects of Clients and Tasks of Projects. The Rest server was implemente using <a href="http://silex.sensiolabs.org/" target="_blank">Silex</a> Micro Framework

#### Installing Rest Server

<a href="https://getcomposer.org" target="_blank">Composer</a> is required.

Inside rest-server execute **composer.phar install** to install Silex Micro Framewok.

#### Running Rest Server

After install Silex, you must run inside folder **rest-server/web** you must run the following command.

````
$ php -S localhost:8081
````
You can choose any port available in your system. The URL and port will be using in Collections to get the Model

#### Configuring Collections

Is required edit all Collections to set the proper URL for Rest Server as you can see in the following example.

````
define(["marionette",
        "../models/ClientModel"], function(Marionette, Client ) {

    var Clients = Backbone.Collection.extend({
                url: 'http://localhost:8081/rest/clients',
                model: Client
    });

    return Clients;

});
````
