import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { OrderDTO } from './Order.DTO';
import { OrderService } from './order.service';

@Controller('order')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Post()
  @ApiOperation({ description: 'Cadastrar Pedido' })
  @ApiTags('Pedidos')
  create(@Body() createOrderDto: OrderDTO) {
    return this.orderService.create(createOrderDto);
  }

  @Get()
  @ApiTags('Pedidos')
  @ApiOperation({ description: 'Buscar Pedidos' })
  findAll() {
    return this.orderService.findAll();
  }

  @Get(':id')
  @ApiTags('Pedidos')
  @ApiOperation({ description: 'Buscar um unico Pedido' })
  findOne(@Param('id') id: string) {
    return this.orderService.findOne(id);
  }

  @Put(':id')
  @ApiTags('Pedidos')
  @ApiOperation({ description: 'Atualizar Pedido' })
  update(@Param('id') id: string, @Body() updateOrderDto: OrderDTO) {
    return this.orderService.update(id, updateOrderDto);
  }

  @Delete(':id')
  @ApiTags('Pedidos')
  @ApiOperation({ description: 'Deletar Pedido' })
  remove(@Param('id') id: string) {
    return this.orderService.remove(id);
  }
}
