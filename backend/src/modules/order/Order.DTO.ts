import { ApiProperty } from '@nestjs/swagger';

export class OrderDTO {
  id: string;

  @ApiProperty({
    description: 'Periodo do plano',
    required: true,
    default: 1,
  })
  months: number;

  createdAt: Date;
  updatedAt: Date;

  @ApiProperty({
    description: 'id do Plano',
    required: true,
    default: '',
  })
  planId: string;
  @ApiProperty({
    description: 'id do Usuário',
    required: true,
    default: '',
  })
  subscriberId: string;
}
