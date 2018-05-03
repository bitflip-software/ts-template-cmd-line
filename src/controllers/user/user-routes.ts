import express = require( "express" );
import API = require( "./user" );

export namespace Routes {
	export function index () : express.Router {
		const router = express.Router();
		router.route( "/" )
			.get( API.index );

		return router;
	}
}