import { Injectable } from '@nestjs/common';
import { Subscriber } from 'rxjs';
import { PrismaService } from 'src/database/prisma';
import { OrderDTO } from './Order.DTO';

@Injectable()
export class OrderService {
  constructor(private prisma: PrismaService) {}
  async create(data: OrderDTO) {
    if (data.months === 1 || data.months === 3 || data.months === 12) {
      const ExistSubscriber = await this.prisma.order.findFirst({
        where: {
          subscriberId: data.subscriberId,
        },
      });
      if (ExistSubscriber) {
        return {
          message:
            'Inscrito ja tem um plano cadastrado,tente alterar o plano ou cancele o atual',
        };
      }
      const order = await this.prisma.order.create({
        data,
      });

      return order;
    }
    return {
      message: 'Plano não disponível',
    };
  }

  async findAll() {
    const Orders = await this.prisma.order.findMany({
      select: {
        id: true,
        months: true,
        plan: {
          select: {
            id: false,
            name: true,
            priceOneMonth: true,
            priceThreeMonths: true,
            priceTwelveMonths: true,
          },
        },
        subscriber: {
          select: {
            id: false,
            name: true,
            email: true,
          },
        },
      },
    });

    Orders.map(async order => {
      if (order.months === 1) {
        delete order.plan.priceThreeMonths;
        delete order.plan.priceTwelveMonths;
      } else if (order.months === 3) {
        delete order.plan.priceOneMonth;
        delete order.plan.priceTwelveMonths;
      } else if (order.months === 12) {
        delete order.plan.priceOneMonth;
        delete order.plan.priceThreeMonths;
      }
      return order;
    });

    return Orders;
  }

  async findOne(id: string) {
    const Order = await this.prisma.order.findFirst({
      where: {
        id,
      },
      select: {
        id: true,
        months: true,
        plan: {
          select: {
            id: false,
            name: true,
            priceOneMonth: true,
            priceThreeMonths: true,
            priceTwelveMonths: true,
          },
        },
        subscriber: {
          select: {
            id: false,
            name: true,
            email: true,
          },
        },
      },
    });

    if (Order.months === 1) {
      delete Order.plan.priceThreeMonths;
      delete Order.plan.priceTwelveMonths;
    } else if (Order.months === 3) {
      delete Order.plan.priceOneMonth;
      delete Order.plan.priceTwelveMonths;
    } else if (Order.months === 12) {
      delete Order.plan.priceOneMonth;
      delete Order.plan.priceThreeMonths;
    }

    return Order;
  }

  async update(id: string, data: OrderDTO) {
    const order = await this.prisma.order.update({
      where: {
        id,
      },
      data,
    });
    return order;
  }

  async remove(id: string) {
    const order = await this.prisma.order.delete({
      where: {
        id,
      },
    });
    return 'Deletado com sucesso';
  }
}
