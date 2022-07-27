import Head from 'next/head';
import { Button } from 'reactstrap';
import { coRotaPlanos } from '../src/Constantes';
import { api } from '../src/services/api';
import styles from '../styles/Home.module.css';
import Router from 'next/router';
const CadastrarPlanos = () => {
  const handleCadastrar = async () => {
    let planos = [
      {
        name: 'PlayStation Plus Extra',
        description:
          'Obtenha todos os excelentes benefícios incluídos no plano Essential do PlayStation Plus, bem como o acesso ao catálogo de jogos, que inclui centenas de jogos, desde grandes sucessos que definiram gêneros a independentes inovadores, com novos títulos adicionados regularmente.',
        priceOneMonth: 52.9,
        priceThreeMonths: 139.9,
        priceTwelveMonths: 339.9,
      },
      {
        name: 'PlayStation Plus Deluxe',
        description:
          'Desfrute de todos os principais benefícios do PlayStation Plus, de centenas de jogos no catálogo de jogos, bem como de vantagens exclusivas como avaliações de jogos o catálogo de clássicos.',
        priceOneMonth: 59.9,
        priceThreeMonths: 159.9,
        priceTwelveMonths: 389.9,
      },

      {
        name: 'PlayStation Plus Essential',
        description:
          'Desfrute de todos os principais benefícios do PlayStation Plus: junte-se aos seus amigos no modo multijogador online, adicione novos jogos à sua coleção todos os meses, receba ofertas incríveis da PlayStation Store e muito mais.',
        priceOneMonth: 34.9,
        priceThreeMonths: 84.9,
        priceTwelveMonths: 199.9,
      },
    ];

    Promise.all([
      api.post(coRotaPlanos, planos[0]),
      api.post(coRotaPlanos, planos[1]),
      api.post(coRotaPlanos, planos[2]),
    ]).then(() => {
      Router.push('/');
    });
  };
  return (
    <div className={styles.container}>
      <Head>
        <title>Wa Project</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Clique nos botão Para Cadastrar os planos
        </h1>

        <div className={styles.buttonContainer}>
          <div style={{ display: 'flex' }}>
            <Button
              onClick={() => {
                handleCadastrar();
              }}
              className={styles.buttonCadastro}
            >
              <span>Cadastrar os Planos</span>
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CadastrarPlanos;