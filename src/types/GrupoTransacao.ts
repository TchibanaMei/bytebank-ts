import { Transação } from "./Transacao.js";

export type GrupoTransacao = {
  label: string;
  transacoes: Transação[];
};
