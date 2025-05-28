import { INestApplication, Injectable } from "@nestjs/common";
import { MenuListRouter } from "@server/menuList/menuList.router";
import * as trpcExpress from "@trpc/server/adapters/express";
import { TrpcService } from "./trpc.service";

@Injectable()
export class TrpcRoute {
  constructor(
    private readonly trpc: TrpcService,
    private readonly menuListRouter: MenuListRouter
  ) {}

  get appRouter() {
    return this.trpc.router({
      menuList: this.menuListRouter.appRouter,
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
