import { INestApplication, Injectable } from "@nestjs/common";
import { MenuListRouter } from "@server/menuList/menuList.router";
import { UserRoute } from "@server/users/user.route";
import * as trpcExpress from "@trpc/server/adapters/express";
import { TrpcService } from "./trpc.service";

@Injectable()
export class TrpcRoute {
  constructor(
    private readonly trpcService: TrpcService,
    private readonly menuListRouter: MenuListRouter,
    private readonly userRouter: UserRoute
  ) {}

  get appRouter() {
    return this.trpcService.trpc.router({
      ...this.menuListRouter.apply(),
      ...this.userRouter.apply(),
    });
  }

  async applyMiddleware(app: INestApplication) {
    app.use(
      "/trpc",
      trpcExpress.createExpressMiddleware({ router: this.appRouter })
    );
  }
}

export type AppRouter = TrpcRoute[`appRouter`];
