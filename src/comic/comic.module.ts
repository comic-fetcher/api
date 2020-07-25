import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";

import { Comic } from "./comic.entity";
import { ComicResolver } from "./comic.resolver";
import { ComicService } from "./comic.service";

@Module({
  providers: [ComicService, ComicResolver],
  imports: [TypeOrmModule.forFeature([Comic])],
  exports: [ComicService, ComicResolver, TypeOrmModule.forFeature([Comic])],
})
export class ComicModule {}
