import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma';
import { PlansDto } from './Plans.dto';

@Injectable()
export class PlansService {
  constructor(private prisma: PrismaService) {}

  async create(data: PlansDto) {
    const plan = await this.prisma.plan.create({
      data,
    });

    return plan;
  }

  async findAll() {
    const plans = await this.prisma.plan.findMany();
    return plans;
  }

  async findOne(id: string) {
    const plan = await this.prisma.plan.findFirst({
      where: {
        id,
      },
    });
    return plan;
  }

  async update(id: string, data: PlansDto) {
    const plan = await this.prisma.plan.update({
      where: {
        id,
      },
      data,
    });
    return plan;
  }

  async remove(id: string) {
    const plan = await this.prisma.plan.delete({
      where: {
        id,
      },
    });
    return 'Deletado com sucesso';
  }
}
