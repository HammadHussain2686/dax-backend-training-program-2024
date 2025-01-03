
/**
 * Middleware for validating the request body using a Zod schema.
 * @param schema - The Zod schema to validate the request body against.
 * @returns Middleware function for Express.
 */
import { Request, Response, NextFunction } from 'express';
import { ZodSchema } from 'zod';

const validateBody = (schema:ZodSchema) => {
    return (req:Request, res:Response, next:NextFunction) => {
        try {
            // Validate the request body
            schema.parse(req.body);
            next(); // Proceed to the next middleware or route handler
        } catch (err:any) {
            // Handle validation errors
            if (err instanceof Error) {
                res.status(400).json({
                    error: 'Validation Error',
                    details: err.message,
                });
            } else {
                next(err);
            }
        }
    };
};

export default validateBody;
