import { Module } from '@nestjs/common';
import { TrpcRoute } from './trpc.route';
import { TrpcService } from './trpc.service';

@Module({
  imports: [],
  controllers: [],
  providers: [TrpcService, TrpcRoute],
})
export class TrpcModule {}
