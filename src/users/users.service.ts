import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entity/users.entity';
import { uuid } from 'uuidv4';

@Injectable()
export class UsersService {
  users: User[] = [];

  getAll(): User[] {
    return this.users;
  }

  create(createUserDto: CreateUserDto): User {
    const newUser: User = {
      id: uuid(),
      name: createUserDto.name,
      email: createUserDto.email,
      password: createUserDto.password,
      created_At: new Date(),
      updated_At: new Date(),
    };

    this.users.push(newUser);

    return newUser;
  }
}
