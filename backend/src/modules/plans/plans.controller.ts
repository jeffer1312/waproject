import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
} from '@nestjs/common';
import { ApiOperation, ApiParam, ApiTags } from '@nestjs/swagger';
import { PlansDto } from './Plans.dto';
import { PlansService } from './plans.service';

@Controller('plans')
export class PlansController {
  constructor(private readonly plansService: PlansService) {}

  @Post()
  @ApiOperation({ description: 'Cadastrar Plano de assinatura' })
  @ApiTags('Planos')
  create(@Body() createPlansDto: PlansDto) {
    return this.plansService.create(createPlansDto);
  }

  @Get()
  @ApiOperation({ description: 'Buscar Planos de assinatura' })
  @ApiTags('Planos')
  findAll() {
    return this.plansService.findAll();
  }

  @Get(':id')
  @ApiOperation({ description: 'Buscar um unico Plano de assinatura' })
  @ApiTags('Planos')
  findOne(@Param('id') id: string) {
    return this.plansService.findOne(id);
  }

  @Put(':id')
  @ApiOperation({ description: 'Atualizar Plano de assinatura' })
  @ApiTags('Planos')
  update(@Param('id') id: string, @Body() updatePlansDto: PlansDto) {
    return this.plansService.update(id, updatePlansDto);
  }

  @Delete(':id')
  @ApiOperation({ description: 'Deletar Plano de assinatura' })
  @ApiTags('Planos')
  remove(@Param('id') id: string) {
    return this.plansService.remove(id);
  }
}
