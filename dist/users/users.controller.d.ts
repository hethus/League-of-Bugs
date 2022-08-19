import { UsersService } from './users.service';
import { User } from './entity/users.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    create(dto: CreateUserDto): Promise<User | void>;
    findAll(): Promise<User[]>;
    findOne(id: string): Promise<User>;
    update(id: string, dto: UpdateUserDto): Promise<User | void>;
    remove(id: string): Promise<{
        name: string;
        email: string;
        cpf: string;
        isAdmin: boolean;
        bugPoint: number;
        id: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
