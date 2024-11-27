
export const errorsMessage = {
    USER_RESET_PASSWORD_TOKEN_ALREADY_SENT: "E-mail com passo-a-passo de redefinição de senha já foi enviado, cheque sua caixa de email",
    USER_MAIL_NOT_FOUND: "Nenhum usuário com esse Email encontrado",
    USER_ALREADY_EXISTS: "Usuário com email já cadastrado",
    BAD_CREDENTIALS: "Credenciais inválidas",
    USER_NOT_FOUND: "Nenhum usuário encontrado",
    USER_MAIL_TOKEN_INVALID: "Token invalido, necessário gerar outro",

    BAD_REQUEST: "Campos obrigatórios não preenchidos corretamente",
    INTERNAL_SERVER_ERROR: "Ocorreu um erro no servidor, tente novamente mais tarde",
    EMAIL_SERVER_ERROR: "Ocorreu um erro ao enviar o email, tente novamente mais tarde"
}

export const jwtTokenErrorMessages: Record<string, string> = {
    "invalid token": "Token inválido",
    "jwt malformed": "Token mal estruturado",
    "jwt signature is required": "Assinatura obrigatória",
    "jwt expired": "Token expirado",
    "invalid signature": "Assinatura inválida",
    "jwt audience invalid. expected:": "Audiência inválida no token",
    "jwt issuer invalid. expected:": "Emissor inválido no token",
    "secret or public key must be provided": "Chave invalida ou inexistente"
};

export const successMessage = {
    USER_RESET_PASSWORD_UPDATED: "Senha atualizada com sucesso",
    USER_RESET_PASSWORD_TOKEN_SENT: "E-mail com passo-a-passo de redefinição de senha enviado com sucesso",

}