import { createContext, useContext, useEffect, useState } from 'react';
import { TSubscriber } from '../../Constantes';

type SubscriberContextType = {
  handleChangeInscrito: (value: TSubscriber) => void;
  inscrito?: TSubscriber;
};
interface IProps {
  children: React.ReactNode;
}

//Criando contexto
const SubscriberContext = createContext({} as SubscriberContextType);

//Criando o provider
const SubscriberProvider: React.FC<IProps> = ({ children }) => {
  const [inscrito, setInscrito] = useState<TSubscriber>();

  const handleChangeInscrito = (value: TSubscriber) => {
    console.log('ta passando:?');
    setInscrito(value);
  };

  return (
    <SubscriberContext.Provider value={{ handleChangeInscrito, inscrito }}>
      {children}
    </SubscriberContext.Provider>
  );
};

export function useSubscriberContext() {
  const context = useContext(SubscriberContext);
  const { handleChangeInscrito, inscrito } = context;
  return { handleChangeInscrito, inscrito };
}

export { SubscriberProvider, SubscriberContext };
