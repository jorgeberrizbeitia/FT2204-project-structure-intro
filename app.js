// Gets access to environment variables/settings
require('dotenv').config()


// Connects to the database... if we had one :( 
require("./db")

// Handles http requests (express is node js framework)
const express = require('express');
const app = express();


// Handles the handlebars
const hbs = require("hbs");


// This part runs most pieces of middleware
app.use(express.static("public"))
app.set('view engine', 'hbs');
app.set('views', __dirname + '/views/' )

// configuraciones adicionales
const logger = require("morgan");
app.use( logger("dev") )

const favicon = require("serve-favicon")
app.use(favicon(__dirname + "/public/images/favicon.ico"))

// Local Variables 
app.locals.name = "Patricio"
// variables locales declaras asi son accesibles en nuestras rutas y en nuestras vistas de HBS


// 👇 Start handling routes here
const indexRoutes = require("./routes/index.routes")
app.use("/patata", indexRoutes)

// To handle errors.
const errorHandling = require("./error-handling/index")
errorHandling(app)

module.exports = app