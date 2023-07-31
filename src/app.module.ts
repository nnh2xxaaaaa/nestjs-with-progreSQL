import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { CustomersModule } from './customers/customers.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import entities from './typeorm';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
      imports: [ConfigModule],
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      autoLoadEntities: true,
      synchronize: true,
      entities: entities,
      inject: [ConfigService],
    }),
    UsersModule,
    CustomersModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
