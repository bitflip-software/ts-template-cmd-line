"use strict";

import async from "async";
import request from "request";
import { Response, Request, NextFunction } from "express";


/**
 * GET /api
 * List of API examples.
 */
export const index = (req: Request, res: Response) => {
	res.status(200).json({success: true, message: "get the api message again"});
	return;
};
