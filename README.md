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

### Modes

Quick is bundled with two modes: Dev-Mode and Prod-Mode. 

**Dev-Mode**


`http://localhost:3000/dev`


Dev-Mode is mapped to the `app` directory and contains editable source code. In this mode you can edit source code and preview the changes directly in the browser without building the project.


**Prod-Mode**


`http://localhost:3000`


Prod-Mode is mapped to the `dist` directory. This mode is the compiled, compressed and tested version of the tool that should be used for production instances. 


**Switching from Dev to Prod**

As a standard, all new features should be made in Dev-Mode then compiled into Prod-Mode once completed. To switch from Dev-Mode to Prod-Mode simply [Build the project](https://github.com/maxcarter/Quick#build).




### API

Quick is built on top of an ExpressJS RESTful API using [Node-Restful](https://github.com/baugarten/node-restful) with integrations from [JSON Web Tokens](https://github.com/auth0/node-jsonwebtoken) and [bcrypt](https://www.npmjs.com/package/bcrypt).

See the [Node-Restful Documentation](https://github.com/baugarten/node-restful/blob/master/README.md#built-in-filters) for more information about the built-in filters associated with the API.

#### Security

**Route Authentication**

Quick's API requires authentication before allowing access to routes. Learn how to [Authenticate a User](https://github.com/maxcarter/Quick#authenticate-a-user). Once a user is authenticated, a [JSON Web Token](https://github.com/auth0/node-jsonwebtoken) is returned and stored in front-end session and as a cookie in your browser for future logins. This token is then passed as a parameter during each request to the backend to give access to the API.


**Password Hashing**

All user passwords stored in Quick's database are hashed and salted using the [bcrypt](https://www.npmjs.com/package/bcrypt) Blowfish Algorithm. 

#### Authenticate a User

To request authentication, send the following payload to `/users/authentication` in a POST request.

```
{
	"username": <Your Username>,
	"password": <Your Passowrd>
}
```

Response:

```
{
	"message": "Enjoy your token!",
	"status": 200,
	"success": true,
	"token": "TheToken"
}
```

## License

![Creative Commons License](https://i.creativecommons.org/l/by-sa/4.0/88x31.png)


This work is licensed under a [Creative Commons Attribution-ShareAlike 4.0 International License](http://creativecommons.org/licenses/by-sa/4.0/).

