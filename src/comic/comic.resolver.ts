import { Args, ID, Query, Resolver } from "@nestjs/graphql";
import { Pagination } from "nestjs-typeorm-paginate";

import { Comic, PaginatedComics } from "./comic.entity";
import { ComicService } from "./comic.service";
import { GetComicsArgs } from "./dto/comics.args";

@Resolver(() => Comic)
export class ComicResolver {
  constructor(private comicService: ComicService) {}

  @Query(() => Comic)
  async comic(@Args("id", { type: () => ID }) id: string): Promise<Comic> {
    return this.comicService.findOne(id);
  }

  @Query(() => PaginatedComics)
  async comics(
    @Args() { page, limit }: GetComicsArgs,
  ): Promise<Pagination<Comic>> {
    return this.comicService.paginate({
      page,
      limit: Math.min(Math.max(limit, 1), 100),
    });
  }
}
