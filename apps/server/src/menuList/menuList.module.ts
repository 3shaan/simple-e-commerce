import { Module } from "@nestjs/common";
import { MenuListRouter } from "./menuList.router";
import { MenuListService } from "./menuList.service";

@Module({
  imports: [],
  providers: [MenuListService, MenuListRouter],
  exports: [MenuListService, MenuListRouter],
})
export class MenuListModule {}
