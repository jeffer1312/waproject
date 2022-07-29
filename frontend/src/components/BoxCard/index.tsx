// criar componetne de card de assinatura

import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  CardHeader,
  List,
  Nav,
  NavItem,
  NavLink,
  TabContent,
  TabPane,
  Row,
  Col,
  Button,
  FormGroup,
  Input,
  Label,
  Spinner,
} from 'reactstrap';
import styles from '../../../styles/boxCard.module.css';
import { coRotaPedidos, data } from '../../Constantes';
import { useSubscriberContext } from '../../context/Subscriber/SubscriberContext';
import { api } from '../../services/api';
import Router from 'next/router';
import { TPlans, TInscritoPedido } from '../../types';

type BoxCardProps = {
  planos: Array<TPlans>;
  Order?: TInscritoPedido;
};
type TOrderPost = {
  months: number;
  planId: string;
  subscriberId: string;
};
const BoxCard = ({ planos, Order }: BoxCardProps) => {
  const inputRefOneMonth = React.useRef<HTMLInputElement>(null);
  const inputRefTreeMoths = React.useRef<HTMLInputElement>(null);
  const inputRefTwelveMoths = React.useRef<HTMLInputElement>(null);
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState<string>(
    Order?.Order[0]?.plan?.id ? Order?.Order[0]?.plan?.id : planos[0]?.id
  );
  console.log('oque', Order?.Order[0]?.plan?.id, planos[0]?.id);
  const [months, setMonths] = useState<number>(0);
  const { inscrito } = useSubscriberContext();

  const handlePostOrder = async () => {
    if (months > 0) {
      setLoading(true);
      const order: TOrderPost = {
        months,
        planId: activeTab,
        subscriberId: inscrito ? inscrito.id : '',
      };

      if (Order?.Order[0]?.plan?.id) {
        const res = await api.put(
          `${coRotaPedidos}/${Order?.Order[0]?.id}`,
          order
        );
        if (res.status === 200) {
          Router.push('/AssinaturaRealizada');
          setLoading(false);
        }
      } else {
        const res = await api.post(coRotaPedidos, order);
        if (res.status === 201) {
          Router.push('/AssinaturaRealizada');
          setLoading(false);
        }
      }
    } else {
      alert('Selecione um valor');
    }
  };

  useEffect(() => {
    if (Order?.Order[0]?.months) {
      if (Order?.Order[0]?.months === 1) {
        //@ts-ignore
        if (inputRefOneMonth?.current) {
          inputRefOneMonth.current.checked = true;
        }
      } else if (Order?.Order[0]?.months === 3) {
        if (inputRefTreeMoths?.current) {
          //@ts-ignore
          inputRefTreeMoths.current.checked = true;
        }
      } else if (Order?.Order[0]?.months === 12) {
        if (inputRefTwelveMoths?.current) {
          //@ts-ignore
          inputRefTwelveMoths.current.checked = true;
        }
      }
    }
  }, [Order, activeTab]);

  useEffect(() => {
    if (Order?.Order[0]?.plan?.id) {
      setActiveTab(Order?.Order[0]?.plan?.id);
    } else {
      setActiveTab(planos[0]?.id);
    }
  }, [Order, planos]);

  return (
    <>
      <div>
        <Nav className={styles.tab} tabs>
          {planos?.map((plano, index) => (
            <div
              key={plano.id}
              style={
                plano?.name?.toUpperCase().includes('DELUXE')
                  ? { order: 1 }
                  : plano?.name?.toUpperCase().includes('EXTRA')
                  ? { order: 2 }
                  : { order: 3 }
              }
              className={
                activeTab === plano.id
                  ? styles.navItemContainerActive
                  : styles.navItemContainer
              }
            >
              <NavItem
                style={
                  plano?.name?.toUpperCase().includes('DELUXE')
                    ? { backgroundColor: '#1f1f1f', color: '#fcc000' }
                    : plano?.name?.toUpperCase().includes('EXTRA')
                    ? { backgroundColor: '#fcc000', color: '#1f1f1f' }
                    : { backgroundColor: '#ffff', color: '#1f1f1f' }
                }
                onClick={() => {
                  setActiveTab(plano.id);
                }}
                className={styles.navItem}
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
                    {data[index]?.title}
                  </CardText>
                </CardTitle>
              </NavItem>
            </div>
          ))}
        </Nav>
        <TabContent className={styles.tabContent} activeTab={activeTab}>
          {planos?.map((plano, index) => (
            <TabPane key={plano.id} className={styles.tabPane} tabId={plano.id}>
              <Card className={styles.card}>
                <div className={styles.descricao}>
                  <div className={styles.header}>
                    <h1>{plano.name}</h1>
                    <p>{plano.description}</p>
                  </div>
                  {plano?.name?.toUpperCase().includes('DELUXE') ? (
                    <>
                      <li className={styles.item}>
                        <Image
                          src={'/assets/asset 30.svg'}
                          width='40px'
                          height={'40px'}
                        ></Image>

                        <p>Catálogo de clássicos</p>
                      </li>
                      <li className={styles.item}>
                        <Image
                          src={'/assets/asset 32.svg'}
                          width='40px'
                          height={'40px'}
                        ></Image>

                        <p>Avaliações de jogos</p>
                      </li>{' '}
                    </>
                  ) : plano?.name?.toUpperCase().includes('EXTRA') ? (
                    <>
                      <li className={styles.item}>
                        <Image
                          src={'/assets/asset 26.svg'}
                          width='40px'
                          height={'40px'}
                        ></Image>

                        <p>Catálogo de jogos</p>
                      </li>
                      <li className={styles.item}>
                        <Image
                          src={'/assets/asset 28.svg'}
                          width='40px'
                          height={'40px'}
                        ></Image>

                        <p>Ubisoft+ Classics</p>
                      </li>
                    </>
                  ) : (
                    <>
                      <li className={styles.item}>
                        <Image
                          src={'/assets/asset 10.svg'}
                          width='40px'
                          height={'40px'}
                        ></Image>

                        <p>Jogos mensais</p>
                      </li>
                      <li className={styles.item}>
                        <Image
                          src={'/assets/asset 12.svg'}
                          width='40px'
                          height={'40px'}
                        ></Image>

                        <p>Modo multijogador online</p>
                      </li>
                      <li className={styles.item}>
                        <Image
                          src={'/assets/asset 14.svg'}
                          width='40px'
                          height={'40px'}
                        ></Image>

                        <p>Descontos exclusivos</p>
                      </li>
                    </>
                  )}

                  <div className={styles.info}>
                    <b>{` ${plano.name} também inclui:`}</b> <br />
                    {plano?.name?.toUpperCase().includes('DELUXE') ? (
                      <div className={styles.items}>
                        {data[0]?.itens
                          .filter(
                            item =>
                              item.text.toUpperCase() !==
                                'Catálogo de clássicos'.toUpperCase() &&
                              item.text.toUpperCase() !==
                                'Avaliações de jogos'.toUpperCase()
                          )
                          .map((item, index) => (
                            <li key={index} className={styles.itemInfo}>
                              <Image
                                src={item.src}
                                width='28px'
                                height={'28px'}
                              ></Image>

                              <p>{item.text}</p>
                            </li>
                          ))}
                      </div>
                    ) : plano?.name?.toUpperCase().includes('EXTRA') ? (
                      <div className={styles.items}>
                        {data[1]?.itens
                          .filter(
                            item =>
                              item.text.toUpperCase() !==
                                'Catálogo de jogos'.toUpperCase() &&
                              item.text.toUpperCase() !==
                                'Ubisoft+ Classics'.toUpperCase()
                          )
                          .map((item, index) => (
                            <li key={index} className={styles.itemInfo}>
                              <Image
                                src={item.src}
                                width='28px'
                                height={'28px'}
                              ></Image>

                              <p>{item.text}</p>
                            </li>
                          ))}
                      </div>
                    ) : (
                      <div className={styles.items}>
                        {data[2]?.itens
                          .filter(
                            item =>
                              item.text.toUpperCase() !==
                                'Jogos mensais'.toUpperCase() &&
                              item.text.toUpperCase() !==
                                'Modo multijogador online'.toUpperCase() &&
                              item.text.toUpperCase() !==
                                'Descontos exclusivos'.toUpperCase()
                          )
                          .map((item, index) => (
                            <li key={index} className={styles.itemInfo}>
                              <Image
                                src={item.src}
                                width='28px'
                                height={'28px'}
                              ></Image>

                              <p>{item.text}</p>
                            </li>
                          ))}
                      </div>
                    )}
                  </div>
                </div>
                <div className={styles.valores}>
                  <span>Escolha um plano de assinatura</span>

                  <div className={styles.checkBox}>
                    <div>
                      <label className={styles.radlabel}>
                        <input
                          ref={inputRefOneMonth}
                          type='radio'
                          className={styles.radinput}
                          name='rad'
                          onChange={e =>
                            setMonths(parseInt(e.target.value.toString()))
                          }
                          value={1}
                        />

                        <div className={styles.raddesign} />
                        <div className={styles.radtext}>
                          {' '}
                          Assinatura de um mês
                          <br />
                          <b>
                            R$
                            {plano?.priceOneMonth}
                          </b>
                        </div>
                      </label>
                      <label className={styles.radlabel}>
                        <input
                          ref={inputRefTreeMoths}
                          type='radio'
                          className={styles.radinput}
                          name='rad'
                          value={3}
                          onChange={e =>
                            setMonths(parseInt(e.target.value.toString()))
                          }
                        />
                        <div className={styles.raddesign} />
                        <div className={styles.radtext}>
                          Assinatura de 3 meses
                          <br />
                          <b>
                            R$
                            {plano?.priceThreeMonths}
                          </b>
                        </div>
                      </label>
                      <label className={styles.radlabel}>
                        <input
                          ref={inputRefTwelveMoths}
                          type='radio'
                          className={styles.radinput}
                          name='rad'
                          value={12}
                          onChange={e =>
                            setMonths(parseInt(e.target.value.toString()))
                          }
                        />
                        <div className={styles.raddesign} />
                        <div className={styles.radtext}>
                          Assinatura de 12 meses
                          <br />
                          <b>
                            R$
                            {plano?.priceTwelveMonths}
                          </b>
                        </div>
                      </label>
                    </div>
                  </div>

                  <div className={styles.buttonContainer}>
                    <Button
                      onClick={() => {
                        handlePostOrder();
                      }}
                      className={styles.buttonVerPlanos}
                    >
                      {loading ? (
                        <Spinner
                          color='white'
                          style={{
                            width: '1rem',
                            height: '1rem',
                            borderWidth: '.3rem',
                          }}
                        />
                      ) : (
                        <span>
                          {Order?.Order[0]?.id ? 'Alterar' : 'Assinar'}
                        </span>
                      )}
                    </Button>
                  </div>
                </div>
              </Card>
            </TabPane>
          ))}
        </TabContent>
      </div>
    </>
  );
};

export default BoxCard;
