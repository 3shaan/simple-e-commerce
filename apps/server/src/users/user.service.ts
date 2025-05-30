import { Injectable } from "@nestjs/common";
import { PrismaService } from "@server/prisma/prisma.service";
import { UserCreate } from "./user.dto";

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  // find all users
  findAll() {
    return this.prisma.user.findMany();
  }

  // find one user by id
  findById(id: number) {
    return this.prisma.user.findUnique({ where: { id } });
  }

  // create a user
  create(data: UserCreate) {
    return this.prisma.user.create({ data });
  }
}
