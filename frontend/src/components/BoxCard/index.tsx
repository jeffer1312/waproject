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
import { data } from '../../Constantes';

import { TPlans } from '../../types';

type BoxCardProps = {
  planos: Array<TPlans>;
};
const BoxCard = ({ planos }: BoxCardProps) => {
  const [activeTab, setActiveTab] = React.useState<string>(planos[0].id);

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
                    <FormGroup className={styles.input} check>
                      <Input type='radio' name='opcao' value={1} /> Assinatura
                      de um mês
                      <br />
                      <b>
                        R$
                        {plano?.priceOneMonth}
                      </b>
                    </FormGroup>
                    <FormGroup className={styles.input} check>
                      <Input value={3} name='opcao' type='radio' /> Assinatura
                      de um mês
                      <br />
                      <b>
                        R$
                        {plano?.priceThreeMonths}
                      </b>
                    </FormGroup>
                    <FormGroup className={styles.input} check>
                      <Input value={12} name='opcao' type='radio' /> Assinatura
                      de um mês
                      <br />
                      <b>
                        R$
                        {plano?.priceTwelveMonths}
                      </b>
                    </FormGroup>
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
