import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class AppService {
  constructor(@InjectRepository(User) private usersRepository: Repository<User>){}

  async getAll(): Promise<User[]> {
    return await this.usersRepository.find({
      relations: ['pets']
    });  //SELECT * from user
  }

  async getOneById(id: any): Promise<User> {
    try {
      return await this.usersRepository.findOneOrFail(id); 
    } catch (error) {
      throw error
    }
  }

  async createUser(name: string): Promise<User> {
    const newUser = this.usersRepository.create({ name });

    return this.usersRepository.save(newUser);
  }

  async updateUser(id: number, name: string): Promise<User> {
    const user = await this.getOneById({ id });

    user.name = name;

    return this.usersRepository.save(user);
  }

  async deleteUser(id: number): Promise<User> {
    const user = await this.getOneById({ id });

    return await this.usersRepository.remove(user);
  }

  getHello(): string {
    return 'Hello World!';
  }
}
