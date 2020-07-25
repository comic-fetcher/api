/* eslint-disable max-classes-per-file */
import { Field, ID, ObjectType, registerEnumType } from "@nestjs/graphql";
import { Column, Entity, PrimaryColumn } from "typeorm";

import { Paginate } from "src/common/paginate";

export enum ComicPlatform {
  COMIC_WALKER = "ComicWalker",
}

registerEnumType(ComicPlatform, {
  name: "ComicPlatform",
});

@ObjectType()
@Entity()
export class Comic {
  @Field(() => ID)
  @PrimaryColumn()
  id!: string;

  @Field()
  @Column()
  title!: string;

  @Field()
  @Column()
  link!: string;

  @Field(() => ComicPlatform)
  @Column({
    type: "enum",
    enum: ComicPlatform,
  })
  platform!: ComicPlatform;
}

@ObjectType()
export class PaginatedComics extends Paginate(Comic) {}
