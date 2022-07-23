import { Module } from '@nestjs/common';

import { PlansModule } from './modules/plans/plans.module';
import { SubscribersModule } from './modules/subscribers/subscribers.module';
import { OrderModule } from './modules/order/order.module';

@Module({
  imports: [PlansModule, SubscribersModule, OrderModule],
})
export class AppModule {}
