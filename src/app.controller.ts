import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { StripeService } from './stripe/stripe.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    public stripeService: StripeService,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
