import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { LoginInput } from './dto/auth.input';
import { JwtService } from '@nestjs/jwt';
import { Customer } from 'src/lib/entities/customer.entity';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private readonly jwtService: JwtService,
  ) {}

  async findByUserNameAndPassword(params: LoginInput) {
    const { username, password } = params;

    const customer = await this.prisma.customer.findFirst({
      where: {
        email: username,
        password,
      },
    });

    if (!customer) {
      throw new UnauthorizedException();
    }

    const payload = {
      sub: customer.id,
      username: customer.email,
      role: customer.role,
    };

    return { token: await this.jwtService.signAsync(payload) };
  }

  async me(id: string): Promise<Customer> {
    const loggedUser = await this.prisma.customer.findUnique({ where: { id } });
    return loggedUser;
  }
}
