import { NextFunction, Request, Response } from "express";
import { ObjectSchema } from "joi";

export default function schemaValidation(schema: ObjectSchema) {
    
    return (req: Request, res: Response, next: NextFunction) => {
    
        const { error } = schema.validate(req.body, { abortEarly: false });

        if (error) {

            const errors = error.details.map((detail) => `\n${detail.message}`);
            
            return res.status(422).send(`🚫 Unprocessable entity!\n${errors}`);

        }

        next();
    }
}