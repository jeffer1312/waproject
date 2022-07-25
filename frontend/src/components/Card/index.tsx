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
import { data } from '../../Constantes';
type TItens = {
  src: string;
  text: string;
};

type TPlanosProps = {
  id?: string;
  name?: string;
  index: number;
  description?: string;
  priceOneMonth?: number;
  priceThreeMonths?: number;
  priceTwelveMonths?: number;
  createdAt?: Date;
  updatedAt?: Date;
};
const CardPlanos = (plano: TPlanosProps) => {
  return (
    <>
      <Card className={styles.card}>
        <CardHeader
          style={
            plano.index === 0
              ? { backgroundColor: '#1f1f1f', color: '#fcc000' }
              : plano.index === 1
              ? { backgroundColor: '#fcc000', color: '#1f1f1f' }
              : { backgroundColor: '#ffff', color: '#1f1f1f' }
          }
          className={styles.cardHeader}
        >
          <CardTitle className={styles.cardTitle}>
            <h2>
              <b>{plano?.name?.toUpperCase()}</b>
            </h2>
            <CardText
              style={plano.index === 0 ? { color: '#ccc' } : { color: '#000' }}
              className={styles.cardText}
            >
              {data[plano.index].title}
            </CardText>
          </CardTitle>
        </CardHeader>
        <CardBody className={styles.cardBody}>
          <ul className={styles.list}>
            {data[plano?.index].itens.map((item, index) => (
              <li key={index} className={styles.item}>
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
