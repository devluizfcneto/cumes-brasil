// controllers/auth.controller.ts

import { NextFunction, Request, Response } from 'express';
import AuthService from '../../Application/services/AuthenticateService';
import HandleErrors from '../../Application/errors/HandleErrors';

class AuthController {
    private authService: AuthService;

    constructor() {
        this.authService = new AuthService();
        this.login = this.login.bind(this);
        this.googleLogin = this.googleLogin.bind(this);
    }

    async login(req: Request, res: Response, next: NextFunction) {
        try {
            const { email, password } = req.body;
            const token = await this.authService.login(email, password);
            res.json({ token });
        } catch (error) {
            HandleErrors.handleErrors(error, req, res, next);
        }
    }


    async googleLogin(req: Request, res: Response, next: NextFunction) {
        try {
            const { authorizationCode } = req.body;
            const user = await this.authService.googleLogin(authorizationCode);
            res.json(user);
        } catch (error) {
            HandleErrors.handleErrors(error, req, res, next);
        }
    }

    registrar = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const {
                nome,
                email,
                senha
            } = req.body;
            await this.authService.register(nome, email, senha);
            res.status(201).json({ message: 'Usuario criado com sucesso.' });
        } catch (error) {
            HandleErrors.handleErrors(error, req, res, next);
        }
    };

    generateResetUserPasswordToken = async (req: Request, res: Response, next: NextFunction) => {
        try {
            console.log("entrei")
            const response = await this.authService.createResetUserPassword(req.body?.email);
            res.status(200).json({
                message: response.message
            });

        } catch (error: any) {
            HandleErrors.handleErrors(error, req, res, next);
        }
    }

    /**
     * Criar lógica para resetar senha do usuario
     */
    resetPassword = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const response = await this.authService.updateUserPassword(req.body?.password, req.body?.passwordRepeated, req.params?.token);
            res.status(201).json({
                message: response.message
            });
        } catch (error: any) {
            HandleErrors.handleErrors(error, req, res, next);
        }
    }
}

export default AuthController;
