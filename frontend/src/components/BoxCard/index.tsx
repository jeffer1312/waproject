// criar componetne de card de assinatura

import Image from 'next/image';
import React, { useState } from 'react';
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
} from 'reactstrap';
import styles from '../../../styles/boxCard.module.css';
import { coRotaPedidos, data } from '../../Constantes';
import { useSubscriberContext } from '../../context/Subscriber/SubscriberContext';
import { api } from '../../services/api';

import { TPlans } from '../../types';

type BoxCardProps = {
  planos: Array<TPlans>;
};
type TOrderPost = {
  months: number;
  planId: string;
  subscriberId: string;
};
const BoxCard = ({ planos }: BoxCardProps) => {
  const [activeTab, setActiveTab] = React.useState<string>(planos[0].id);
  const [months, setMonths] = useState<number>(0);
  const { inscrito } = useSubscriberContext();

  const handlePostOrder = async () => {
    if (months > 0) {
      const order: TOrderPost = {
        months,
        planId: activeTab,
        subscriberId: inscrito ? inscrito.id : '',
      };

      const res = await api.post(coRotaPedidos, order);

      console.log(res);
    } else {
      alert('Selecione um valor');
    }
  };

  return (
    <>
      <div>
        <Nav className={styles.tab} tabs>
          {planos?.map((plano, index) => (
            <NavItem
              style={
                index === 0
                  ? { backgroundColor: '#1f1f1f', color: '#fcc000' }
                  : index === 1
                  ? { backgroundColor: '#fcc000', color: '#1f1f1f' }
                  : { backgroundColor: '#ffff', color: '#1f1f1f' }
              }
              onClick={() => {
                setActiveTab(plano.id);
                setMonths(0);
              }}
              className={
                activeTab === plano.id ? styles.navItemActive : styles.navItem
              }
            >
              <CardTitle className={styles.cardTitle}>
                <h2>
                  <b>{plano?.name?.toUpperCase()}</b>
                </h2>
                <CardText
                  style={index === 0 ? { color: '#ccc' } : { color: '#000' }}
                  className={styles.cardText}
                >
                  {data[index]?.title}
                </CardText>
              </CardTitle>
            </NavItem>
          ))}
        </Nav>
        <TabContent className={styles.tabContent} activeTab={activeTab}>
          {planos?.map((plano, index) => (
            <TabPane className={styles.tabPane} tabId={plano.id}>
              <Card className={styles.card}>
                <div className={styles.descricao}>
                  <div className={styles.header}>
                    <h1>{plano.name}</h1>
                    <p>{plano.description}</p>
                  </div>
                  {index === 0 ? (
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
                  ) : index === 1 ? (
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
                    {index === 0 ? (
                      <div className={styles.items}>
                        {data[index].itens
                          .filter(
                            item =>
                              item.text.toUpperCase() !==
                                'Catálogo de clássicos'.toUpperCase() &&
                              item.text.toUpperCase() !==
                                'Avaliações de jogos'.toUpperCase()
                          )
                          .map(item => (
                            <>
                              {' '}
                              <li className={styles.itemInfo}>
                                <Image
                                  src={item.src}
                                  width='28px'
                                  height={'28px'}
                                ></Image>

                                <p>{item.text}</p>
                              </li>
                            </>
                          ))}
                      </div>
                    ) : index === 1 ? (
                      <div className={styles.items}>
                        {data[index].itens
                          .filter(
                            item =>
                              item.text.toUpperCase() !==
                                'Catálogo de jogos'.toUpperCase() &&
                              item.text.toUpperCase() !==
                                'Ubisoft+ Classics'.toUpperCase()
                          )
                          .map(item => (
                            <>
                              {' '}
                              <li className={styles.itemInfo}>
                                <Image
                                  src={item.src}
                                  width='28px'
                                  height={'28px'}
                                ></Image>

                                <p>{item.text}</p>
                              </li>
                            </>
                          ))}
                      </div>
                    ) : (
                      <div className={styles.items}>
                        {data[index].itens
                          .filter(
                            item =>
                              item.text.toUpperCase() !==
                                'Jogos mensais'.toUpperCase() &&
                              item.text.toUpperCase() !==
                                'Modo multijogador online'.toUpperCase() &&
                              item.text.toUpperCase() !==
                                'Descontos exclusivos'.toUpperCase()
                          )
                          .map(item => (
                            <>
                              {' '}
                              <li className={styles.itemInfo}>
                                <Image
                                  src={item.src}
                                  width='28px'
                                  height={'28px'}
                                ></Image>

                                <p>{item.text}</p>
                              </li>
                            </>
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
                      <span>Assinar</span>
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
