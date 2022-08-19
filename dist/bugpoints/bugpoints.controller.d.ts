import { BugpointsService } from './bugpoints.service';
import { CreateBugpointDto } from './dto/create-bugpoint.dto';
import { UpdateBugpointDto } from './dto/update-bugpoint.dto';
import { Bugpoint } from './entities/bugpoint.entity';
export declare class BugpointsController {
    private readonly bugpointsService;
    constructor(bugpointsService: BugpointsService);
    create(dto: CreateBugpointDto): Promise<Bugpoint | void>;
    findAll(): Promise<Bugpoint[]>;
    findOne(id: string): Promise<Bugpoint>;
    update(id: string, dto: UpdateBugpointDto): Promise<Bugpoint | void>;
    remove(id: string): Promise<import(".prisma/client").BugPoint>;
}
