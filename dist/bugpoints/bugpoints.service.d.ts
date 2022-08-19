import { PrismaService } from 'src/prisma/prisma.service';
import { CreateBugpointDto } from './dto/create-bugpoint.dto';
import { UpdateBugpointDto } from './dto/update-bugpoint.dto';
import { Bugpoint } from './entities/bugpoint.entity';
export declare class BugpointsService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(dto: CreateBugpointDto): Promise<Bugpoint | void>;
    findAll(): Promise<Bugpoint[]>;
    verifyIdAndReturnBugpoint(id: string): Promise<Bugpoint>;
    findOne(id: string): Promise<Bugpoint>;
    update(id: string, dto: UpdateBugpointDto): Promise<Bugpoint | void>;
    remove(id: string): Promise<import(".prisma/client").BugPoint>;
}
