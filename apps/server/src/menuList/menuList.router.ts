import { Injectable } from "@nestjs/common";
import { TrpcService } from "@server/trpc/trpc.service";
import {
  createMenuListDto,
  deleteMenuListDto,
  updateMenuListDto,
} from "./menuList.dto";
import { MenuListService } from "./menuList.service";

@Injectable()
export class MenuListRouter {
  constructor(
    private readonly trpcService: TrpcService,
    private readonly menuListService: MenuListService
  ) {}
  get appRouter() {
    return this.trpcService.router({
      findAll: this.trpcService.procedure.query(() => {
        return this.menuListService.findAll();
      }),
      create: this.trpcService.procedure
        .input(createMenuListDto)
        .mutation(({ input }) => {
          return this.menuListService.create(input);
        }),
      update: this.trpcService.procedure
        .input(updateMenuListDto)
        .mutation(({ input }) => {
          return this.menuListService.update(input);
        }),
      delete: this.trpcService.procedure
        .input(deleteMenuListDto)
        .mutation(({ input }) => {
          return this.menuListService.delete(input.id);
        }),
    });
  }
}
