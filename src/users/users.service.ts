import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entity/user.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

  async createUser(user: Omit<User, 'id' | 'createdAt'>): Promise<any> {
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(user.password, saltRounds);

    const newUser = this.usersRepository.create({
      name: user.name,
      password: hashedPassword,
      email: user.email,
    });

    return this.usersRepository.save(newUser);
  }

  async findById(id: string): Promise<User | undefined> {
    return this.usersRepository.findOneBy({ id });
  }

  async findByUsername(name: string): Promise<User | undefined> {
    return this.usersRepository.findOneBy({ name });
  }

  async updateUser(id: string, user: Partial<User>): Promise<boolean> {
    const updateResult = await this.usersRepository.update(id, user);

    if (updateResult.affected > 0) {
      return true;
    }
    return false;
  }

  async delete(id: string): Promise<boolean> {
    const deleteResult = await this.usersRepository.delete({ id });

    if (deleteResult.affected > 0) {
      return true;
    }
    return false;
  }
}
