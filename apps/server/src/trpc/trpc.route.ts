import { INestApplication, Injectable } from '@nestjs/common';
import * as trpcExpress from '@trpc/server/adapters/express';
import { z } from 'zod';
import { TrpcService } from './trpc.service';

@Injectable()
export class TrpcRoute {
  constructor(private readonly trpc: TrpcService) {}

  get appRouter() {
    return this.trpc.router({
      hello: this.trpc.procedure
        .input(
          z.object({
            name: z.string().optional(),
          }),
        )
        .query(({ input }) => {
          const { name = 'World' } = input;
          return `Hello ${name}`;
        }),
    });
  }

  async applyMiddleware(app: INestApplication) {
    app.use(
      '/trpc',
      trpcExpress.createExpressMiddleware({ router: this.appRouter }),
    );
  }
}

export type AppRouter = TrpcRoute[`appRouter`];
