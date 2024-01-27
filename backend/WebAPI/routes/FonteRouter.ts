import {Router} from 'express';
import dbConnection from '../../Infrastructure/config/db';
import {FonteController} from '../Controllers/FonteController';
import {FonteService} from '../../Application/services/FonteService';
import {FonteRepository} from '../../Infrastructure/repositories/FonteRepository';

const fonteService = new FonteService(new FonteRepository(dbConnection));
const fonteController = new FonteController(fonteService);

const FonteRouter = Router();

FonteRouter.get('/:id', fonteController.getFonteById);
FonteRouter.get('/', fonteController.getAllFonte);
FonteRouter.post('/', fonteController.createFonte);
FonteRouter.put('/id', fonteController.updateFonte);
FonteRouter.delete('/:id', fonteController.deleteFonte);

export default FonteRouter;