import { Injectable } from '@nestjs/common';
import { Response } from 'express';
import { PrismaService } from 'src/database/prisma';
import { SubscriberDTO } from './Subscriber.dto';

@Injectable()
export class SubscribersService {
  constructor(private prisma: PrismaService) {}

  async create(data: SubscriberDTO, res: Response) {
    const ExistSubscriber = await this.prisma.subscriber.findFirst({
      where: {
        email: data.email,
      },
    });

    if (ExistSubscriber) {
      return res.status(403).send({ erro: 'Email já cadastrado' });
    }

    const Subscriber = await this.prisma.subscriber.create({
      data,
    });

    return res.status(201).send(Subscriber);
  }

  async findAll() {
    const Subscribers = await this.prisma.subscriber.findMany();
    return Subscribers;
  }
  async findOne(id: string) {
    const Subscriber = await this.prisma.subscriber.findFirst({
      where: {
        id,
      },
    });
    return Subscriber;
  }

  async update(id: string, data: SubscriberDTO) {
    const Subscriber = await this.prisma.subscriber.update({
      where: {
        id,
      },
      data,
    });
    return Subscriber;
  }

  async remove(id: string) {
    const Subscriber = await this.prisma.subscriber.delete({
      where: {
        id,
      },
    });
    return 'Deletado com sucesso';
  }
}
