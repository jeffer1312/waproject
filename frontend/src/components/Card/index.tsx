// criar componetne de card de assinatura

import Image from 'next/image';
import React from 'react';
import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  CardHeader,
  List,
} from 'reactstrap';
import styles from '../../../styles/cardPlanos.module.css';
type TItens = {
  src: string;
  text: string;
};

type TPlanosProps = {
  id: number;
  nome: string;
  title: string;
  itens: Array<TItens>;
};
const CardPlanos = (plano: TPlanosProps) => {
  return (
    <>
      <Card className={styles.card}>
        <CardHeader
          style={
            plano.id === 1
              ? { backgroundColor: '#1f1f1f', color: '#fcc000' }
              : plano.id === 2
              ? { backgroundColor: '#fcc000', color: '#1f1f1f' }
              : { backgroundColor: '#ffff', color: '#1f1f1f' }
          }
          className={styles.cardHeader}
        >
          <CardTitle className={styles.cardTitle}>
            <h2>
              <b>{plano?.nome?.toUpperCase()}</b>
            </h2>
            <CardText
              style={plano.id === 1 ? { color: '#ccc' } : { color: '#000' }}
              className={styles.cardText}
            >
              {plano?.title}
            </CardText>
          </CardTitle>
        </CardHeader>
        <CardBody className={styles.cardBody}>
          <ul className={styles.list}>
            {plano?.itens?.map(item => (
              <li className={styles.item}>
                <Image src={item?.src} width='40px' height={'40px'}></Image>

                <p>{item?.text}</p>
              </li>
            ))}
          </ul>
        </CardBody>
      </Card>
    </>
  );
};

export default CardPlanos;
