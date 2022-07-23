import { ApiProperty, ApiParam } from '@nestjs/swagger';
export class PlansDto {
  id: string;
  @ApiProperty({
    description: 'Nome do plano',
    default: 'Plano Básico',
  })
  name: string;
  @ApiProperty({
    description: 'Descrição do plano',
    required: true,
    default: 'descrição basica',
  })
  description: string;
  @ApiProperty({
    description: 'Preço do plano por mês',
    required: true,
    default: 10,
  })
  priceOneMonth: number;
  @ApiProperty({
    description: 'Preço do plano por 3 meses',
    required: true,
    default: 25,
  })
  priceThreeMonths: number;
  @ApiProperty({
    description: 'Preço do plano por 12 meses',
    required: true,
    default: 50,
  })
  priceTwelveMonths: number;

  createdAt: Date;
  updatedAt: Date;
}
