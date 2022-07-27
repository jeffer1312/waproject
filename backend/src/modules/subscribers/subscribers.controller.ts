import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpCode,
  Res,
  Put,
} from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { Response } from 'express';

import { SubscriberDTO } from './Subscriber.dto';
import { SubscribersService } from './subscribers.service';

@Controller('subscribers')
export class SubscribersController {
  constructor(private readonly subscribersService: SubscribersService) {}

  @Post()
  @ApiOperation({ description: 'Cadastrar Inscrito' })
  @ApiTags('Inscritos')
  create(@Body() createSubscriberDto: SubscriberDTO, @Res() res: Response) {
    return this.subscribersService.create(createSubscriberDto, res);
  }

  @Get()
  @ApiOperation({ description: 'Buscar Inscritos' })
  @ApiTags('Inscritos')
  findAll() {
    return this.subscribersService.findAll();
  }

  @Get(':id')
  @ApiOperation({ description: 'Buscar um unico Inscrito' })
  @ApiTags('Inscritos')
  findOne(@Param('id') id: string) {
    return this.subscribersService.findOne(id);
  }

  @Put(':id')
  @ApiOperation({ description: 'Atualizar Inscrito' })
  @ApiTags('Inscritos')
  update(@Param('id') id: string, @Body() updateSubscriberDto: SubscriberDTO) {
    return this.subscribersService.update(id, updateSubscriberDto);
  }

  @Delete(':id')
  @ApiOperation({ description: 'Deletar Inscrito' })
  @ApiTags('Inscritos')
  @HttpCode(204)
  remove(@Param('id') id: string) {
    return this.subscribersService.remove(id);
  }
}
