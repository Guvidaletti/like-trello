import axios from 'axios';
import { useEffect, useState } from 'react';

export interface Quadro {
  nome: string;
  background: string;
  etiquetas?: {
    nome: string;
    cor: string;
  }[];
  raias?: {
    posicao: number;
    nome?: string;
    cartoes?: {
      nome: string;
      posicao: number;
    }[];
  }[];
}

export default function useQuadros(): [Quadro[], boolean] {
  const [quadros, setQuadros] = useState<Quadro[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`${process.env.PUBLIC_URL}/mock/boards.json`)
      .then((resp) => {
        if (resp.data && Array.isArray(resp.data)) {
          setQuadros(resp.data as Quadro[]);
        }
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return [quadros, loading];
}
