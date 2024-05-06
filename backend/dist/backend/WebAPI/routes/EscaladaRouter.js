"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const EscaladaRepository_1 = require("../../Infrastructure/repositories/EscaladaRepository");
const EscaladaService_1 = require("../../Application/services/EscaladaService");
const EscaladaController_1 = require("../Controllers/EscaladaController");
const UsuarioService_1 = require("../../Application/services/UsuarioService");
const UsuarioRepository_1 = require("../../Infrastructure/repositories/UsuarioRepository");
const ViaService_1 = require("../../Application/services/ViaService");
const ViaRepository_1 = require("../../Infrastructure/repositories/ViaRepository");
const viaRepository = new ViaRepository_1.ViaRepository();
const usuarioService = new UsuarioService_1.UsuarioService(new UsuarioRepository_1.UsuarioRepository());
const escaladaRepository = new EscaladaRepository_1.EscaladaRepository();
const viaService = new ViaService_1.ViaService(viaRepository);
const escaladaService = new EscaladaService_1.EscaladaService(escaladaRepository, usuarioService, viaService);
const escaladaController = new EscaladaController_1.EscaladaController(escaladaService);
const EscaladaRouter = (0, express_1.Router)();
EscaladaRouter.get("/:id", escaladaController.getEscaladaById);
EscaladaRouter.get("/", escaladaController.getAllEscalada);
EscaladaRouter.post("/", escaladaController.createEscalada);
EscaladaRouter.put("/:id", escaladaController.updateEscalada);
EscaladaRouter.delete("/:id", escaladaController.deleteEscalada);
EscaladaRouter.get("/usuario/:usuarioId", escaladaController.getByUsuarioId);
EscaladaRouter.get("/via/:viaId", escaladaController.getByViaId);
exports.default = EscaladaRouter;
