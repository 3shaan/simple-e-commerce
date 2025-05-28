import { Global, Module } from "@nestjs/common";
import { MenuListModule } from "@server/menuList/menuList.module";
import { TrpcRoute } from "./trpc.route";
import { TrpcService } from "./trpc.service";

@Global()
@Module({
  imports: [MenuListModule],
  providers: [TrpcService, TrpcRoute],
  exports: [TrpcService],
})
export class TrpcModule {}
