import { Query, Resolver, Float, Args } from '@nestjs/graphql';

@Resolver()
export class HelloWorldResolver {
  @Query(() => String, {
    description: 'Holamundo es lo que retorna',
    name: 'Hola',
  })
  helloWorld(@Args('text') text: string): string {
    return `Hola ${text}`;
  }

  @Query(() => Float, { name: 'randomNumber' })
  getRandomNumber(): number {
    return Math.random() * 100;
  }
}
