import { Injectable } from '@nestjs/common';
import { initTRPC } from '@trpc/server';
@Injectable()
export class TrpcService {
  trpc = initTRPC.create();
  router = this.trpc.router;
  procedure = this.trpc.procedure;
  mergeRouters = this.trpc.mergeRouters;
}
