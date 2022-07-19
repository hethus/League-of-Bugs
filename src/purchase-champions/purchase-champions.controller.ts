import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
} from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { PurchaseChampionDto } from './dto/purchase-champions.dto';
import { PurchaseChampion } from './entities/purchase-champions.entity';
import { PurchaseChampionsService } from './purchase-champions.service';

@ApiTags('purchase champions')
@Controller('purchase/champions')
export class PurchaseChampionsController {
  constructor(
    private readonly purchaseChampionsService: PurchaseChampionsService,
  ) {}

  @Post()
  @ApiOperation({
    summary: 'Purchase champions for a user',
  })
  purchaseChampions(
    @Body() dto: PurchaseChampionDto,
  ): Promise<PurchaseChampion | void> {
    return this.purchaseChampionsService.purchaseChampions(dto);
  }

  @Delete(':id')
  @ApiOperation({
    summary: 'Reverse a purchase of a champion for a user',
  })
  @HttpCode(HttpStatus.NO_CONTENT)
  reversalPurchaseChampion(@Param('id') id: string) {
    return this.purchaseChampionsService.reversalPurchaseChampion(id);
  }

  @Get('user/:id')
  @ApiOperation({
    summary: 'Get all purchases for a user',
  })
  getUserPurchasesChampion(
    @Param('id') id: string,
  ): Promise<PurchaseChampion[]> {
    return this.purchaseChampionsService.getUserPurchasesChampion(id);
  }

  @Get('adm/:id')
  @ApiOperation({
    summary: 'Get all users who have purchased a champion',
  })
  getUsersWhoPurchasedChampion(
    @Param('id') id: string,
  ): Promise<PurchaseChampion[]> {
    return this.purchaseChampionsService.getUsersWhoPurchasedChampion(id);
  }
}
