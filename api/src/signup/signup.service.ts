import {
  BadRequestException,
  Injectable,
  ServiceUnavailableException,
} from '@nestjs/common';
import { CreateCustomerInput } from 'src/customer/dto/customer.input';
import { Customer } from 'src/lib/entities/customer.entity';
import { PrismaService } from 'src/prisma.service';
import { ActivationInput } from './dto/activation.input';

@Injectable()
export class SignupService {
  constructor(private prisma: PrismaService) {}

  async signUp(newCustomer: CreateCustomerInput) {
    const customer: Customer = await this.prisma.customer.create({
      data: newCustomer,
    });

    if (!customer) throw new ServiceUnavailableException();

    return this.prisma.registrationCodes.create({
      data: {
        activationCode: Math.floor(100000 + Math.random() * 900000).toString(),
        customerId: customer.id,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    });
  }

  async activate(activation: ActivationInput) {
    const activationCode = await this.prisma.registrationCodes.findFirst({
      where: {
        activationCode: activation.activationCode,
        customerId: activation.customerId,
      },
    });

    if (!activationCode || !!activationCode.activationDate) {
      throw new BadRequestException();
    }

    return this.prisma.registrationCodes.update({
      data: { activationDate: new Date() },
      where: { id: activationCode.id },
    });
  }
}
