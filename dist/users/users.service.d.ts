import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entity/users.entity';
import { PrismaService } from 'src/prisma/prisma.service';
import { UpdateUserDto } from './dto/update-user.dto';
export declare class UsersService {
    private readonly prisma;
    private userSelect;
    constructor(prisma: PrismaService);
    create(dto: CreateUserDto): Promise<User | void>;
    findAll(): Promise<User[]>;
    verifyIdAndReturnUser(id: string): Promise<User>;
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
    findOne(id: string): Promise<User>;
}
