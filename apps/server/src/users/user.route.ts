import { Injectable } from "@nestjs/common";
import { TrpcService } from "@server/trpc/trpc.service";
import { z } from "zod";
import { UserCreateDto } from "./user.dto";
import { UserService } from "./user.service";

@Injectable()
export class UserRoute {
  constructor(
    private readonly userService: UserService,
    private readonly trpcService: TrpcService
  ) {}
  apply() {
    return {
      userRouter: this.trpcService.router({
        findAll: this.trpcService.procedure.query(() => {
          return this.userService.findAll();
        }),
        findById: this.trpcService.procedure
          .input(z.number())
          .query(({ input }) => {
            return this.userService.findById(input);
          }),
        create: this.trpcService.procedure
          .input(UserCreateDto)
          .mutation(({ input }) => {
            return this.userService.create(input);
          }),
      }),
    };
  }
}
