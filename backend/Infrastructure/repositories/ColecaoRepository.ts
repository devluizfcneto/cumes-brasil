import { Database } from "sqlite3";
import { Colecao } from "../../Domain/models/Colecao";
import { ViaRepository } from "./ViaRepository";

export class ColecaoRepository {
  private db: Database;
  private viaRepository: ViaRepository;

  constructor(db: Database, viaRepository: ViaRepository) {
    this.db = db;
    this.viaRepository = viaRepository;
  }

  async getColecaoById(id: number): Promise<Colecao | null> {
    var query = `SELECT * FROM Colecao WHERE id = ?`;
    return new Promise((resolve, reject) => {
      this.db.get(query, [id], (err, row: Colecao) => {
        if (err) {
          reject(err);
          return;
        }
        if (row) {
          const colecao = new Colecao(
            row.id,
            row.nome,
            row.descricao,
            row.usuario_id
          );

          resolve(colecao);
        } else {
          resolve(null);
        }
      });
    });
  }

  async getColecoes(): Promise<Colecao[] | null> {
    return new Promise((resolve, reject) => {
      this.db.all(`SELECT * FROM Colecao`, (err, rows: Colecao[]) => {
        if (err) {
          reject(err);
          return;
        }
        if (rows) {
          const colecoes = rows.map(
            (row) =>
              new Colecao(row.id, row.nome, row.descricao, row.usuario_id)
          );
          resolve(colecoes);
        } else {
          resolve(null);
        }
      });
    });
  }

  async getColecoesByUsuarioId(usuarioId: number): Promise<Colecao[] | null> {
    return new Promise((resolve, reject) => {
      this.db.all(
        `SELECT * FROM Colecao WHERE usuario_id = ?`,
        [usuarioId],
        (err, rows: Colecao[]) => {
          if (err) {
            reject(err);
            return;
          }
          if (rows) {
            const colecoes = rows.map(
              (row) =>
                new Colecao(row.id, row.nome, row.descricao, row.usuario_id)
            );
            resolve(colecoes);
          } else {
            resolve(null);
          }
        }
      );
    });
  }

  async createColecao(colecao: Colecao): Promise<void> {
    return new Promise((resolve, reject) => {
      this.db.run(
        `INSERT INTO Colecao (nome, descricao, usuario_id) VALUES (?,?,?)`,
        [colecao.nome, colecao.descricao, colecao.usuario_id],
        (err) => {
          if (err) {
            reject(err);
            return;
          }
          resolve();
        }
      );
    });
  }

  async updateColecao(colecao: Colecao): Promise<void> {
    return new Promise((resolve, reject) => {
      this.db.run(
        `UPDATE Colecao SET nome = ?, descricao = ?, usuario_id = ? WHERE id = ?`,
        [colecao.nome, colecao.descricao, colecao.usuario_id, colecao.id],
        (err) => {
          if (err) {
            reject(err);
            return;
          }
          resolve();
        }
      );
    });
  }

  async deleteColecao(id: number): Promise<void> {
    return new Promise((resolve, reject) => {
      this.db.run(`DELETE FROM Colecao WHERE id = ?`, [id], (err) => {
        if (err) {
          reject(err);
          return;
        }
        resolve();
      });
    });
  }

  async getColecaoFavorito(nome: string): Promise<Colecao | null> {
    return new Promise((resolve, reject) => {
      this.db.get(
        `SELECT * FROM Colecao WHERE nome = ?`,
        [nome],
        (err, row: Colecao) => {
          if (err) {
            reject(err);
            return;
          }
          if (row) {
            const colecaoFavoritos = new Colecao(
              row.id,
              row.nome,
              row.descricao ?? "",
              row.usuario_id!
            );
            resolve(colecaoFavoritos);
          } else {
            resolve(null);
          }
        }
      );
    });
  }

  //Criar logica para que não permita criação de nova coleção FAVORITO
  async createColecaoFavorito(usuario_id: number): Promise<void> {
    return new Promise((resolve, reject) => {
      this.db.run(
        `INSERT INTO Colecao (nome, descricao, usuario_id) VALUES (?,?,?)`,
        ["Favorito", "Coleção de Favoritadas", usuario_id],
        (err) => {
          if (err) {
            reject(err);
            return;
          }
          resolve();
        }
      );
    });
  }

  //DEVE SER POSSIVEL ADICIONAR UMA NOVA VIA A COLECAO A PARTIR DE UMA TABELA REALCIONAO
  //TABALE RELACIONAL "VIA_COLECOES" QUE TEM UM FK_VIA E FK_COLECAO
  async addVia(via_id: number, colecao_id: number): Promise<void> {
    return new Promise((resolve, reject) => {
      this.db.run(
        `INSERT INTO ViasColecoes (via_id, colecao_id) VALUES (?,?)`,
        [via_id, colecao_id],
        (err) => {
          if (err) {
            reject(err);
            return;
          }
          resolve();
        }
      );
    });
  }

  async removeVia(via_id: number, colecao_id: number): Promise<void> {
    return new Promise((resolve, reject) => {
      this.db.run(
        `DELETE FROM ViasColecoes WHERE via_id = ? AND colecao_id = ?`,
        [via_id, colecao_id],
        (err) => {
          if (err) {
            reject(err);
            return;
          }
          resolve();
        }
      );
    });
  }

  async getViasIdsByColecaoId(colecaoId: number): Promise<number[] | null> {
    return new Promise((resolve, reject) => {
      this.db.all(
        `SELECT via_id FROM ViasColecoes WHERE colecao_id = ?`,
        [colecaoId],
        (err, rows) => {
          if (err) {
            reject(err);
            return;
          }

          if (rows) {
            const ViasIds = (rows as { via_id: number }[]).map(
              (row) => row.via_id
            );
            resolve(ViasIds);
          } else {
            resolve(null);
          }
        }
      );
    });
  }
}
