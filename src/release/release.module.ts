import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";

import { Release } from "./release.entity";
import { ReleaseResolver } from "./release.resolver";
import { ReleaseService } from "./release.service";

@Module({
  providers: [ReleaseService, ReleaseResolver],
  imports: [TypeOrmModule.forFeature([Release])],
  exports: [
    ReleaseService,
    ReleaseResolver,
    TypeOrmModule.forFeature([Release]),
  ],
})
export class ReleaseModule {}
