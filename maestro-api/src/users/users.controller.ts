import {
  BadRequestException,
  Body,
  Controller,
  Get,
  Logger,
  Patch,
  Post,
  UseGuards,
} from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { InjectRepository } from "@nestjs/typeorm";
import { AuthGuardJwt } from "src/auth/auth.guard.jwt";
import { AuthService } from "src/auth/auth.service";
import { CurrentUser } from "src/auth/current-user.decorator";
import { CreateUserDto } from "src/auth/input/create-user.dto";
import { UpdateUserDto } from "src/auth/input/update-user.dto";
import { Repository } from "typeorm";
import { User } from "./user.entity";

@Controller("users")
export class UsersController {
  private readonly logger = new Logger(UsersController.name);

  constructor(
    @InjectRepository(User)
    private readonly repository: Repository<User>,
    private readonly authService: AuthService
  ) {}

  @Get()
  async findAll() {
    // * Using the added logger
    this.logger.log("Hit the findAll route");
    const users = await this.repository.find();
    this.logger.debug(`Found ${users.length} users`);
    return users;
  }

  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    const user = new User();

    const existingUser = await this.repository.findOne({
      where: { username: createUserDto.username },
    });

    if (existingUser) {
      throw new BadRequestException(["Username or email is already taken"]);
    }

    user.username = createUserDto.username;
    user.password = await this.authService.hashPassword(createUserDto.password);
    user.email = createUserDto.email;

    return {
      ...(await this.repository.save(user)),
      token: this.authService.getTokenForUser(user),
    };
  }

  @Patch()
  @UseGuards(AuthGuardJwt)
  async update(
    @Body() updateUserDto: UpdateUserDto,
    @CurrentUser() user: User
  ) {
    user.bio = updateUserDto.bio;
    user.age = updateUserDto.age;
    user.genres = updateUserDto.genres;
    user.links = updateUserDto.links;
    user.roles = updateUserDto.roles;
    user.image = updateUserDto.image;

    return await this.repository.save({
      ...user,
      ...updateUserDto,
    });
  }
}
