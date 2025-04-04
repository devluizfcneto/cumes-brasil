import { Router } from 'express';
import ViaRouter from './ViaRouter';
import UsuarioRouter from './UsuarioRouter';
import MontanhaRouter from './MontanhaRouter';
import FonteRouter from './FonteRouter';
import FaceRouter from './FaceRouter';
import CroquiRouter from './CroquiRouter';
import ColecaoRouter from './ColecaoRouter';
import EscaladaRouter from './EscaladaRouter';
import { ConexaoController } from '../Controllers/ConexaoController';
import { ConexaoService } from '../../Application/services/ConexaoService';
import { AppDataSource } from '../../Infrastructure/config/db';
import AuthenticateRouter from './AuthenticateRouter';
import { authenticateToken } from '../Middlewares/AuthenticateMiddleware';
import ImagemRouter from './ImagemRouter';
import SearchRouter from './SearchRouter';
import PerfilRouter from "./PerfilRouter";
import {optionalAuthMiddleware} from "../Middlewares/OptionalMiddleware";

const routes = Router();
const conexaoController = new ConexaoController(new ConexaoService(AppDataSource));
routes.get("/conexao", conexaoController.checkDatabaseHealth);
routes.use("/auth", AuthenticateRouter);
routes.use("/vias", ViaRouter);
routes.use("/fontes", FonteRouter);
routes.use("/montanhas", MontanhaRouter);
routes.use("/faces", FaceRouter);
routes.use("/croquis", CroquiRouter);
routes.use("/usuarios", authenticateToken, UsuarioRouter);
routes.use("/imagens", ImagemRouter);
routes.use("/escaladas", authenticateToken, EscaladaRouter);
routes.use('/colecoes', authenticateToken, ColecaoRouter);
routes.use("/perfil", authenticateToken, PerfilRouter);
routes.use("/search", optionalAuthMiddleware,SearchRouter);
export default routes;
