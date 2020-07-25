import { ArgsType } from "@nestjs/graphql";

import { PaginationArgs } from "src/common/paginate";

@ArgsType()
export class GetComicsArgs extends PaginationArgs {}
