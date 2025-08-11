import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service'; // Adjust path if needed
import * as bcrypt from 'bcrypt'; // For password comparison

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.usersService.findByUsername(username); // Assuming you have this method in UserService
    if (user && (await bcrypt.compare(pass, user.password))) {
      // Compare hashed password
      const { password, ...result } = user; // Exclude password from the returned object
      return result;
    }
    return null;
  }

  async login(user: any) {
    const payload = {
      username: user.username,
      sub: user.id,
      roles: user.roles,
    }; // Customize payload with user data
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
