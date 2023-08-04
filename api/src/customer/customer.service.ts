import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import {
  CreateCustomerInput,
  FindCustomerByIdOrEmail,
  GetCustomerInput,
  UpdateCustomerInput,
} from './dto/customer.input';

@Injectable()
export class CustomerService {
  constructor(private prisma: PrismaService) {}

  async findAll(params: GetCustomerInput) {
    const { skip, take, cursor, where } = params;

    return this.prisma.customer.findMany({
      skip,
      take,
      cursor,
      where,
    });
  }

  async create(newCustomer: CreateCustomerInput) {
    return this.prisma.customer.create({ data: newCustomer });
  }

  async getByIdOrEmail(params: FindCustomerByIdOrEmail) {
    return this.prisma.customer.findFirst({
      where: params,
    });
  }

  async update(updatedCustomer: UpdateCustomerInput) {
    return this.prisma.customer.update({
      data: updatedCustomer,
      where: { id: updatedCustomer.id },
    });
  }

  async delete(id: string) {
    return this.prisma.customer.delete({ where: { id } });
  }
}
