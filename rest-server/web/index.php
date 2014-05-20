<?php

require_once __DIR__.'/../vendor/autoload.php';

// Request Libraries
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;

$app = new Silex\Application();

$app->get('/rest/clients', function() use ($app) {

  $clients = array(
              array(
                'id' => 1,
                'name' => 'HP'
                ),
              array(
                'id' => 2,
                'name' => 'IBM'
                ),
              array(
                'id' => 3,
                'name' => 'Google'
                ),
            );

  return $app->json($clients);
});

$app->get('/rest/client/{client}/projects', function($client) use ($app) {

  $projects = array(
    '1' => array(
      array(
        'id' => 1,
        'name' => 'Project AC/DC'
       ),
      array(
        'id' => 2,
        'name' => 'Project Metallica'
       ),
     ),
    '2' => array(
      array(
        'id' => 3,
        'name' => 'Project Red Hot Chille Peppers'
       ),
     ),
    '3' => array(
      array(
        'id' => 4,
        'name' => 'Project Pink'
       ),
      array(
        'id' => 5,
        'name' => 'Project Bruno Mars'
       ),
     ),
  );

  return $app->json($projects[$client]);
});

$app->get('/rest/project/{project}/tasks', function($project) use ($app) {

  $tasks = array(
    '1' => array(
      array(
        'id' => 1,
        'name' => 'Install Linux Server'
       ),
      array(
        'id' => 2,
        'name' => 'Install Apache 2 or Ngix'
       ),
     ),
    '2' => array(
      array(
        'id' => 3,
        'name' => 'Install Mysql 5 or Maria DB'
       ),
     ),
    '3' => array(
      array(
        'id' => 4,
        'name' => 'Install PHP 5.3+'
       ),
      array(
        'id' => 5,
        'name' => 'Install Composer'
       ),
     ),
    '4' => array(
      array(
        'id' => 6,
        'name' => 'Download UnderscodeJS'
       ),
      array(
        'id' => 7,
        'name' => 'Download BackboneJS'
       ),
     ),
    '5' => array(
      array(
        'id' => 8,
        'name' => 'Download MarionetteJS'
       ),
     ),
  );

  return $app->json($tasks[$project]);
});


$app->after(function (Request $request, Response $response) {
    //$response->headers->set('Access-Control-Allow-Origin', '*');
    $response->headers->set('Access-Control-Allow-Origin', 'http://YOURSERVER:YOURPORT');
});

$app->run();
