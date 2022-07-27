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
      <Card
        className={styles.card}
        style={
          plano?.name?.toUpperCase().includes('DELUXE')
            ? { order: 1 }
            : plano?.name?.toUpperCase().includes('EXTRA')
            ? { order: 2 }
            : { order: 3 }
        }
      >
        <CardHeader
          style={
            plano?.name?.toUpperCase().includes('DELUXE')
              ? { backgroundColor: '#1f1f1f', color: '#fcc000' }
              : plano?.name?.toUpperCase().includes('EXTRA')
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
              style={
                plano?.name?.toUpperCase().includes('DELUXE')
                  ? { color: '#ccc' }
                  : { color: '#000' }
              }
              className={styles.cardText}
            >
              {data[plano.index]?.title}
            </CardText>
          </CardTitle>
        </CardHeader>
        <CardBody className={styles.cardBody}>
          <ul className={styles.list}>
            {plano?.name?.toUpperCase().includes('DELUXE')
              ? data[0]?.itens.map((item, index) => (
                  <li key={index} className={styles.item}>
                    <Image src={item?.src} width='40px' height={'40px'}></Image>

                    <p>{item?.text}</p>
                  </li>
                ))
              : plano?.name?.toUpperCase().includes('EXTRA')
              ? data[1]?.itens.map((item, index) => (
                  <li key={index} className={styles.item}>
                    <Image src={item?.src} width='40px' height={'40px'}></Image>

                    <p>{item?.text}</p>
                  </li>
                ))
              : data[2]?.itens.map((item, index) => (
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
