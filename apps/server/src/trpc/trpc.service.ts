import { Injectable } from "@nestjs/common";
import { initTRPC } from "@trpc/server";
import SuperJSON from "superjson";
@Injectable()
export class TrpcService {
  trpc = initTRPC.create({
    transformer: SuperJSON,
  });
  router = this.trpc.router;
  procedure = this.trpc.procedure;
  mergeRouters = this.trpc.mergeRouters;
}
