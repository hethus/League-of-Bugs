import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { PurchaseBpsDto } from './dto/purchase-bugpoints.dto';
import { PurchaseBp } from './entities/purchase-bugpoints.entity';
import { PurchaseBpsService } from './purchase-bps.service';

@ApiTags('purchase bugpoints')
@Controller('purchase/bugpoints')
export class PurchaseBpsController {
  constructor(private readonly purchaseBpsService: PurchaseBpsService) {}

  @Post()
  @ApiOperation({
    summary: 'Purchase bugpoints for a user',
  })
  purchaseBps(@Body() dto: PurchaseBpsDto): Promise<PurchaseBp | void> {
    return this.purchaseBpsService.purchaseBps(dto);
  }

  @Get('user/:id')
  @ApiOperation({
    summary: 'Get all purchases for a user',
  })
  getUserPurchases(@Param('id') id: string): Promise<PurchaseBp[]> {
    return this.purchaseBpsService.getUserPurchases(id);
  }

  @Get('adm/:id')
  @ApiOperation({
    summary: 'Get all users who purchased a Gift Card',
  })
  getUsersWhoPurchasedBp(@Param('id') id: string): Promise<PurchaseBp[]> {
    return this.purchaseBpsService.getUsersWhoPurchasedBp(id);
  }
}
