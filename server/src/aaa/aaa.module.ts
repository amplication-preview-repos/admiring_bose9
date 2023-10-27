import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { AaaModuleBase } from "./base/aaa.module.base";
import { AaaService } from "./aaa.service";
import { AaaController } from "./aaa.controller";
import { AaaResolver } from "./aaa.resolver";

@Module({
  imports: [AaaModuleBase, forwardRef(() => AuthModule)],
  controllers: [AaaController],
  providers: [AaaService, AaaResolver],
  exports: [AaaService],
})
export class AaaModule {}
