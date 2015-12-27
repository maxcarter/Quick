# Under Construction

Note: This project is still in the development stage of its lifecycle and is not ready for usage.

---

# Quick: The Agile Ticketing System

Quick is a ticketing system designed to improve Agile software development. 

## Installation

```
npm install 
```

## Server

* Prerequisite: [Install Mongo DB](https://docs.mongodb.org/manual/installation/)  

1. [Configure](https://github.com/maxcarter/Quick/blob/master/server/config.js) the server to connect to your Mongo DB database.
2. [Configure](https://github.com/maxcarter/Quick/blob/master/app/scripts/services/config.js) the front-end to connect to your server.
3. [Build](https://github.com/maxcarter/Quick#build) the front-end.
4. Start the Node.js server by running the following commands:
```
cd server
node server.js
```

## Build

```
grunt
```

## Testing

```
grunt test
```

## Features

* Node.js REST API
*

## Tech Specs

* [Yeoman](http://yeoman.io/) scaffolding
* [Node.js](https://nodejs.org/en/) backend
* [Mongo DB](https://www.mongodb.org/) database
* [AngularJS](https://angularjs.org/) frontend
* [Bootstrap](http://getbootstrap.com/) styling
* [Grunt](http://gruntjs.com/) task management 
* [Bower](http://bower.io/) package management
* [Karma](http://karma-runner.github.io/0.13/index.html) testing

## Development

This project is generated with [yo angular generator](https://github.com/yeoman/generator-angular)
version 0.12.1.

### Package installation

Front-End: 

```
bower install --save <Name of Package>
```

Back-End:

```
npm install --save-dev <Name of Package>
```
## License

![Creative Commons License](https://i.creativecommons.org/l/by-sa/4.0/88x31.png)


This work is licensed under a [Creative Commons Attribution-ShareAlike 4.0 International License](http://creativecommons.org/licenses/by-sa/4.0/).

