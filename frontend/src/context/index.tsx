import React from 'react';
import { SubscriberProvider } from './Subscriber/SubscriberContext';

interface GlobalProps {
  children?: React.ReactNode;
}
const GlobalContext: React.FC = ({ children }: GlobalProps) => {
  return <SubscriberProvider>{children}</SubscriberProvider>;
};

export default GlobalContext;
