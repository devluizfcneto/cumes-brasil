"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const FaceController_1 = require("../Controllers/FaceController");
const FaceService_1 = require("../../Application/services/FaceService");
const FaceRepository_1 = require("../../Infrastructure/repositories/FaceRepository");
const FonteRepository_1 = require("../../Infrastructure/repositories/FonteRepository");
const MontanhaRepository_1 = require("../../Infrastructure/repositories/MontanhaRepository");
const FonteService_1 = require("../../Application/services/FonteService");
const MontanhaService_1 = require("../../Application/services/MontanhaService");
const faceRepository = new FaceRepository_1.FaceRepository();
const montanhaRepository = new MontanhaRepository_1.MontanhaRepository();
const montanhaService = new MontanhaService_1.MontanhaService(montanhaRepository);
const fonteRepository = new FonteRepository_1.FonteRepository();
const fonteService = new FonteService_1.FonteService(fonteRepository);
const faceService = new FaceService_1.FaceService(faceRepository, fonteService, montanhaService);
const faceController = new FaceController_1.FaceController(faceService);
const FaceRouter = (0, express_1.Router)();
FaceRouter.get("/:id", faceController.getFaceById);
FaceRouter.get("/", faceController.getAllFace);
FaceRouter.post("/", faceController.createFace);
FaceRouter.put("/:id", faceController.updateFace);
FaceRouter.delete('/:id');
exports.default = FaceRouter;
