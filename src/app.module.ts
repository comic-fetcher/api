import { Module } from "@nestjs/common";
import { GraphQLModule } from "@nestjs/graphql";
import { TypeOrmModule } from "@nestjs/typeorm";

import { ComicModule } from "./comic/comic.module";

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "mysql",
      host: "localhost",
      port: 3306,
      username: "test",
      password: "test",
      database: "db",
      synchronize: true,
      autoLoadEntities: true,
    }),
    GraphQLModule.forRoot({
      autoSchemaFile: `${process.cwd()}/src/schema.graphql`,
    }),
    ComicModule,
  ],
})
export class AppModule {}
