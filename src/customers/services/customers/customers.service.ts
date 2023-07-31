import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Customer } from 'src/typeorm';
import { Repository } from 'typeorm';
import { CreateCustomerDto } from 'src/customers/dtos/CreateCustomer.dto';

@Injectable()
export class CustomersService {
  constructor(
    @InjectRepository(Customer)
    private readonly customerRepository: Repository<Customer>,
  ) {}

  createCustomers(createCustomerDto: CreateCustomerDto) {
    console.log('11');
    const newUser = this.customerRepository.create(createCustomerDto);
    return this.customerRepository.save(newUser);
  }

  getCustomers() {
    console.log('12');
    return this.customerRepository.find();
  }

  findCustomersById(id: number) {
    console.log('13');
    return this.customerRepository.findOne(id);
  }
}
