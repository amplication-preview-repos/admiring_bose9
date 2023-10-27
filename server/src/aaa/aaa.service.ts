import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AaaServiceBase } from "./base/aaa.service.base";

@Injectable()
export class AaaService extends AaaServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
