import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateCustomerDto } from 'src/customers/dtos/CreateCustomer.dto';
import { CustomersService } from 'src/customers/services/customers/customers.service';

@Controller('customers')
export class CustomersController {
  constructor(private readonly customersService: CustomersService) {}

  @Get()
  getCustomers() {
    console.log('23');
    return this.customersService.getCustomers();
  }

  @Get('id/:id')
  findCustomersById(@Param('id', ParseIntPipe) id: number) {
    console.log('33');
    return this.customersService.findCustomersById(id);
  }

  @Post('create')
  @UsePipes(ValidationPipe)
  createCustomers(@Body() createCustomerDto: CreateCustomerDto) {
    console.log('43');

    return this.customersService.createCustomers(createCustomerDto);
  }
}
