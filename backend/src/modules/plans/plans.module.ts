import { Module } from '@nestjs/common';
import { PlansService } from './plans.service';
import { PlansController } from './plans.controller';
import { PrismaService } from 'src/database/prisma';

@Module({
  controllers: [PlansController],
  providers: [PlansService, PrismaService],
})
export class PlansModule {}
