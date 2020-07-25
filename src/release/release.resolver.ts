import { Resolver } from "@nestjs/graphql";

import { Release } from "./release.entity";

@Resolver(() => Release)
export class ReleaseResolver {}
