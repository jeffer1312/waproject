export const coEnderecoApi = 'http://localhost:3333';

export const coRotaPlanos = '/plans'; // post: cadastrar plano , get: listar planos
export const coRotaInscrito = '/subscribers'; // post: cadastrar inscritos , get: listar incritos
export const coRotaPedidos = '/orders'; // post: cadastrar pedidos , get: listar pedidos

export type TPlans = {
  id?: string;
  name: string;
  description: string;
  priceOneMonth: number;
  priceThreeMonths: number;
  priceTwelveMonths: number;
  createdAt?: Date;
  updatedAt?: Date;
};

export type TSubscriber = {
  id?: string;
  name: string;
  email: string;
  createdAt?: Date;
  updatedAt?: Date;
};

export type TOrder = {
  id?: string;
  months: number;
  createdAt?: Date;
  updatedAt?: Date;
  planId: string;
  subscriberId: string;
};

export const planos = [
  {
    id: 1,

    nome: 'Deluxe',
    title: 'Experimente todos os benefícios',
    itens: [
      {
        src: '/assets/asset 10.svg',
        text: 'Jogos mensais',
      },
      {
        src: '/assets/asset 12.svg',
        text: ' Modo multijogador online',
      },

      {
        src: '/assets/asset 14.svg',
        text: 'Descontos exclusivos',
      },
      {
        src: '/assets/asset 16.svg',
        text: 'Conteúdo exclusivo',
      },
      {
        src: '/assets/asset 18.svg',
        text: 'Armazenamento em nuvem',
      },
      {
        src: '/assets/asset 20.svg',
        text: 'Share Play',
      },
      {
        src: '/assets/asset 22.svg',
        text: 'Coleção do PlayStation Plus',
      },
      {
        src: '/assets/asset 24.svg',
        text: 'Ajuda do jogo',
      },
      {
        src: '/assets/asset 26.svg',
        text: 'Catálogo de jogos',
      },
      {
        src: '/assets/asset 28.svg',
        text: 'Ubisoft+ ClassicsCatálogo de clássicos',
      },
      {
        src: '/assets/asset 30.svg',
        text: 'Catálogo de clássicos',
      },
      {
        src: '/assets/asset 32.svg',
        text: 'Avaliações de jogos',
      },
    ],
  },
  {
    id: 2,

    nome: 'EXTRA',
    title: 'Descubra centenas de jogos',
    itens: [
      {
        src: '/assets/asset 10.svg',
        text: 'Jogos mensais',
      },
      {
        src: '/assets/asset 12.svg',
        text: ' Modo multijogador online',
      },

      {
        src: '/assets/asset 14.svg',
        text: 'Descontos exclusivos',
      },
      {
        src: '/assets/asset 16.svg',
        text: 'Conteúdo exclusivo',
      },
      {
        src: '/assets/asset 18.svg',
        text: 'Armazenamento em nuvem',
      },
      {
        src: '/assets/asset 20.svg',
        text: 'Share Play',
      },
      {
        src: '/assets/asset 22.svg',
        text: 'Coleção do PlayStation Plus',
      },
      {
        src: '/assets/asset 24.svg',
        text: 'Ajuda do jogo',
      },
      {
        src: '/assets/asset 26.svg',
        text: 'Catálogo de jogos',
      },
      {
        src: '/assets/asset 28.svg',
        text: 'Ubisoft+ ClassicsCatálogo de clássicos',
      },
    ],
  },
  {
    id: 3,

    nome: 'ESSENTIAL',
    title: 'Jogos mensais, modo multijogador online e muito mais',
    itens: [
      {
        src: '/assets/asset 10.svg',
        text: 'Jogos mensais',
      },
      {
        src: '/assets/asset 12.svg',
        text: ' Modo multijogador online',
      },

      {
        src: '/assets/asset 14.svg',
        text: 'Descontos exclusivos',
      },
      {
        src: '/assets/asset 16.svg',
        text: 'Conteúdo exclusivo',
      },
      {
        src: '/assets/asset 18.svg',
        text: 'Armazenamento em nuvem',
      },
      {
        src: '/assets/asset 20.svg',
        text: 'Share Play',
      },
      {
        src: '/assets/asset 22.svg',
        text: 'Coleção do PlayStation Plus',
      },
      {
        src: '/assets/asset 24.svg',
        text: 'Ajuda do jogo',
      },
    ],
  },
];
