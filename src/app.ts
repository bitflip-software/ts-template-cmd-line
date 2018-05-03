import express from "express";
import compression from "compression";  // compresses requests
import session from "express-session";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import path from "path";
import expressValidator from "express-validator";
import bluebird from "bluebird";


// Load environment variables from .env file, where API keys and passwords are configured
dotenv.config( { path: ".env.example" } );



// Create Express server
const app = express();


// Express configuration
app.set( "port", process.env.PORT || 3000 );

// compress all the responses
app.use( compression() );

app.use( bodyParser.json() );
app.use( bodyParser.urlencoded( { extended: true } ) );
app.use( expressValidator() );

/**
 * Primary app routes.
 */

import APIRoutes = require( "./controllers/api/api-routes" );
import UserRoutes = require( "./controllers/user/user-routes" );


app.use( "/api", APIRoutes.Routes.index() );
app.use( "/user", UserRoutes.Routes.index() );


export default app;