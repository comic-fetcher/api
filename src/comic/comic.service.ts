import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import {
  paginate,
  Pagination,
  IPaginationOptions,
} from "nestjs-typeorm-paginate";
import { Repository } from "typeorm";

import { Comic } from "./comic.entity";

@Injectable()
export class ComicService {
  constructor(
    @InjectRepository(Comic)
    private comicsRepository: Repository<Comic>,
  ) {}

  async findOne(id: string): Promise<Comic> {
    return this.comicsRepository.findOne(id);
  }

  async paginate(options: IPaginationOptions): Promise<Pagination<Comic>> {
    return paginate<Comic>(this.comicsRepository, options);
  }
}
