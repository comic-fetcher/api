/* eslint-disable max-classes-per-file */
import { Field, ID, ObjectType } from "@nestjs/graphql";
import { Column, Entity, PrimaryColumn, ManyToOne } from "typeorm";

// eslint-disable-next-line import/no-cycle
import { Comic } from "src/comic/comic.entity";

@ObjectType()
@Entity()
export class Release {
  @Field(() => ID)
  @PrimaryColumn()
  id!: string;

  @Field(() => Comic)
  @ManyToOne((type) => Comic, (comic) => comic.releases)
  comic!: Comic;

  @Field(() => Date)
  @Column("datetime")
  date!: Date;
}
