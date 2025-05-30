import { Global, Module } from "@nestjs/common";
import { MenuListModule } from "@server/menuList/menuList.module";
import { UserModule } from "@server/users/user.module";
import { TrpcRoute } from "./trpc.route";
import { TrpcService } from "./trpc.service";

@Global()
@Module({
  imports: [MenuListModule, UserModule],
  providers: [TrpcService, TrpcRoute],
  exports: [TrpcService],
})
export class TrpcModule {}
