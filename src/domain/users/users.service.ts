import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { DEFAULT_PAGESIZE, PaginationDto } from "src/common";
import { Repository } from "typeorm";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { User } from "./entities/user.entity";

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private readonly usersRepository: Repository<User>,
  ) {}

  create(createUserDto: CreateUserDto) {
    const user = this.usersRepository.create(createUserDto);

    return this.usersRepository.save(user);
  }

  findAll({ limit, offset }: PaginationDto) {
    return this.usersRepository.find({
      skip: offset,
      take: limit ?? DEFAULT_PAGESIZE.USER,
    });
  }

  async findOne(id: number) {
    const user = await this.usersRepository.findOne({
      where: { id },
      relations: {
        orders: true,
      },
    });

    if (!user) throw new NotFoundException(`User with id ${id} not found`);

    return user;
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const user = await this.usersRepository.preload({
      id,
      ...updateUserDto,
    });

    if (!user) throw new NotFoundException(`User with id ${id} not found`);

    return this.usersRepository.save(user);
  }

  async remove(id: number) {
    const user = await this.findOne(id);

    return this.usersRepository.remove(user);
  }
}
