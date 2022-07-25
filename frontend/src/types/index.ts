export type TPlans = {
  id: string;
  name: string;
  description: string;
  priceOneMonth: number;
  priceThreeMonths: number;
  priceTwelveMonths: number;
  createdAt?: Date;
  updatedAt?: Date;
};

export type TSubscriber = {
  id: string;
  name: string;
  email: string;
  createdAt?: Date;
  updatedAt?: Date;
};

export type TOrder = {
  id: string;
  months: number;
  createdAt?: Date;
  updatedAt?: Date;
  planId: string;
  subscriberId: string;
};
