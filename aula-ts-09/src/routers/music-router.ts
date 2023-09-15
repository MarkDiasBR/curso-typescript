import { Router } from "express";
import musicController from "../controllers/music-controller";
import schemaValidation from "../middlewares/schemaValidation.ts";
import { musicSchema } from "../schemas/musicSchema.ts";

const musicRouter = Router();

musicRouter.get("/musics", musicController.getMusics);
musicRouter.post("/musics", schemaValidation(musicSchema), musicController.createMusic); // DONE: validação via Joi

export default musicRouter;