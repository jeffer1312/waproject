import { createContext, useContext, useEffect, useState } from 'react';
import { TSubscriber } from '../../types';

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

  // Local Storage: setting & getting data
  useEffect(() => {
    const incritoStorage = localStorage.getItem('inscrito');

    if (incritoStorage) {
      let incritoData = JSON.parse(incritoStorage);

      if (incritoData !== '' || incritoData !== null) {
        setInscrito(incritoData);
      }
    }
  }, []);

  useEffect(() => {
    if (inscrito) {
      localStorage.setItem('inscrito', JSON.stringify(inscrito));
    }
  }, [inscrito]);

  const handleChangeInscrito = (value: TSubscriber) => {
    setInscrito(value);
  };

  return (
    <SubscriberContext.Provider value={{ handleChangeInscrito, inscrito }}>
      {children}
    </SubscriberContext.Provider>
  );
};

export function useSubscriberContext() {
  const { handleChangeInscrito, inscrito } = useContext(SubscriberContext);
  return { handleChangeInscrito, inscrito };
}

export { SubscriberProvider, SubscriberContext };
