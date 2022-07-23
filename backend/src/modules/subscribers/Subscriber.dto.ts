import { ApiProperty } from '@nestjs/swagger';

export class SubscriberDTO {
  id: string;

  @ApiProperty({
    description: 'Nome do usuário',
    required: true,
    default: 'jefferson Felizardo',
  })
  name: string;

  @ApiProperty({
    description: 'Email do usuário',
    required: true,
    default: 'jeffer1312@gmail.com',
  })
  email: string;
  createdAt: Date;
  updatedAt: Date;
}
