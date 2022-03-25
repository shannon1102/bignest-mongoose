import { Injectable } from "@nestjs/common"
import { AuthorDto } from "./author.dto"
import { AuthorRepository } from "./author.repository"


@Injectable()
export class AuthorService {
  constructor(
    private readonly authorRepository: AuthorRepository
  ) {
  }
  async create(createAuthorDto: AuthorDto) {
    return await this.authorRepository.create(createAuthorDto)
  }
  async findAll() {
    return await this.authorRepository.findAll()
  }
}
