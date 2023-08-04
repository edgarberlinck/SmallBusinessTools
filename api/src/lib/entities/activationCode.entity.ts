import { Base } from './base.entity';
import { Field, ObjectType } from '@nestjs/graphql';
import { Customer } from './customer.entity';

@ObjectType()
export class ActivationCode extends Base {
  @Field(() => Customer)
  customer: Customer;
  @Field(() => String)
  activationCode: string;
  @Field(() => Date, { nullable: true })
  activationDate?: Date;
}
