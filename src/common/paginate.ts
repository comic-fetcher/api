/* eslint-disable max-classes-per-file */
import { Type } from "@nestjs/common";
import { Field, Int, ObjectType, ArgsType } from "@nestjs/graphql";
import { IPaginationMeta, Pagination } from "nestjs-typeorm-paginate";

@ObjectType()
export class PaginationMeta implements IPaginationMeta {
  @Field(() => Int)
  totalItems: number;

  @Field(() => Int)
  itemsPerPage: number;

  @Field(() => Int)
  totalPages: number;

  @Field(() => Int)
  currentPage: number;

  @Field(() => Int)
  itemCount: number;
}

@ArgsType()
export class PaginationArgs {
  @Field({ defaultValue: 1 })
  page: number;

  @Field({ defaultValue: 100 })
  limit: number;
}

export function Paginate<T>(classRef: Type<T>): any {
  @ObjectType({ isAbstract: true })
  class GraphQLPaginatedType<T> extends Pagination<T> {
    @Field(() => [classRef])
    items: T[];

    @Field(() => PaginationMeta)
    meta: PaginationMeta;
  }
  return GraphQLPaginatedType;
}
