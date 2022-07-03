import { Injectable } from '@nestjs/common';
import { CreateChampionDto } from './dto/create-champion.dto';
import { UpdateChampionDto } from './dto/update-champion.dto';

@Injectable()
export class ChampionsService {
  create(dto: CreateChampionDto) {
    return 'This action adds a new champion';
  }

  findAll() {
    return `This action returns all champions`;
  }

  findOne(id: string) {
    return `This action returns a #${id} champion`;
  }

  update(id: string, dto: UpdateChampionDto) {
    return `This action updates a #${id} champion`;
  }

  remove(id: string) {
    return `This action removes a #${id} champion`;
  }
}
