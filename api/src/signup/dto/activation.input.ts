import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class ActivationInput {
  @Field(() => String, { nullable: false })
  customerId: string;

  @Field(() => String, { nullable: false })
  activationCode: string;
}
