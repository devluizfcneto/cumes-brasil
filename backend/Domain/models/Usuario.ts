import {ColecaoBase} from "./ColecaoBase";
import {ColecaoFavoritos} from "./ColecaoFavoritos";
import {ColecaoEscaladas} from "./ColecaoEscaladas";

export class Usuario {
    id: number;
    nome: string;
    email: string;
    fotoPerfil?: string;
    colecoesPersonalizadas: ColecaoBase[];
    colecoesFavoritos: ColecaoFavoritos[];
    colecoesEscaladas: ColecaoEscaladas[];

    constructor(id: number, nome: string, email: string, fotoPerfil?: string, colecoesPersonalizadas?: ColecaoBase[], colecoesFavoritos?: ColecaoFavoritos[], colecoesEscaladas?: ColecaoEscaladas[]) {
        this.id = id;
        this.nome = nome;
        this.email = email;
        this.fotoPerfil = fotoPerfil;
        this.colecoesPersonalizadas = colecoesPersonalizadas || [];
        this.colecoesFavoritos = colecoesFavoritos || [];
        this.colecoesEscaladas = colecoesEscaladas || [];
    }

    // Métodos adicionais
    public addColecaoPersonalizada(colecao: ColecaoBase) {
        this.colecoesPersonalizadas.push(colecao);
    }

    public addColecaoFavoritos(colecao: ColecaoFavoritos) {
        this.colecoesFavoritos.push(colecao);
    }

    public addColecaoEscaladas(colecao: ColecaoEscaladas) {
        this.colecoesEscaladas.push(colecao);
    }

    public removerColecaoPersonalizada(colecaoId: number) {
        this.colecoesPersonalizadas = this.colecoesPersonalizadas.filter(c => c.id !== colecaoId);
    }

    public removerColecaoFavoritos(colecaoId: number) {
        this.colecoesFavoritos = this.colecoesFavoritos.filter(c => c.id !== colecaoId);
    }

    public removerColecaoEscaladas(colecaoId: number) {
        this.colecoesEscaladas = this.colecoesEscaladas.filter(c => c.id !== colecaoId);
    }

    public atualizarFotoPerfil(novaFoto: string) {
        this.fotoPerfil = novaFoto;
    }

    public atualizarEmail(novoEmail: string) {
        this.email = novoEmail;
    }

    public buscarColecoesPersonalizadas(colecaoId: number): ColecaoBase | null {
        return this.colecoesPersonalizadas.find(c => c.id === colecaoId) || null;
    }

    public buscarColecoesFavoritos(colecaoId: number): ColecaoFavoritos | null {
        return this.colecoesFavoritos.find(c => c.id === colecaoId) || null;

    }

    public buscarColecoesEscaladas(colecaoId: number): ColecaoEscaladas | null {
        return this.colecoesEscaladas.find(c => c.id === colecaoId) || null;
    }
}