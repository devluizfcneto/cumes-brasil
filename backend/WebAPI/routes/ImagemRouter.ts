import { Router } from "express";
import { ImagemController } from "../Controllers/ImagemController";
import { ImagemService } from "../../Application/services/ImagemService";
import { ImagemRepository } from "../../Infrastructure/repositories/ImagemRepository";

const imagemService = new ImagemService(new ImagemRepository());
const imagemController = new ImagemController(imagemService);

const ImagemRouter = Router();

ImagemRouter.get("/:id", imagemController.getImagemById);
ImagemRouter.get("/", imagemController.getAllImagem);
ImagemRouter.post("/", imagemController.createImagem);
ImagemRouter.put("/:id", imagemController.updateImagem);
ImagemRouter.delete("/:id", imagemController.deleteImagem);

export default ImagemRouter;
