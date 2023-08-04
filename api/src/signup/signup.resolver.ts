import { Args, Resolver, Mutation } from '@nestjs/graphql';
import { SignupService } from './signup.service';
import { CreateCustomerInput } from 'src/customer/dto/customer.input';
import { ActivationCode } from 'src/lib/entities/activationCode.entity';
import { ActivationInput } from './dto/activation.input';

@Resolver()
export class SignupResolver {
  constructor(private readonly signupService: SignupService) {}

  @Mutation((returns) => ActivationCode)
  async signUp(@Args('data') customer: CreateCustomerInput) {
    return this.signupService.signUp(customer);
  }

  @Mutation((returns) => ActivationCode)
  async activate(@Args('data') activation: ActivationInput) {
    return this.signupService.activate(activation);
  }
}
