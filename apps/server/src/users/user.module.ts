import { Module } from "@nestjs/common";
import { PrismaModule } from "@server/prisma/prisma.module";
import { UserRoute } from "./user.route";
import { UserService } from "./user.service";

@Module({
  imports: [PrismaModule],
  providers: [UserService, UserRoute],
  exports: [UserService, UserRoute],
})
export class UserModule {}
