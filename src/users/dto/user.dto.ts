import { Expose, Exclude } from 'class-transformer';
import { IsUUID, IsString, IsOptional } from 'class-validator';

export class CreateUserDTO {
  @IsString()
  name: string;

  @IsString()
  email: string;

  @IsString()
  password: string;
}

export class ResponseUserDTO {
  @IsUUID()
  @Expose()
  id: string;

  @IsString()
  @Expose()
  name: string;

  @IsString()
  @Expose()
  email: string;

  @IsString()
  @Exclude()
  password: string;
}

export class UpdateUserDTO {
  @IsUUID()
  @IsOptional()
  id?: string;

  @IsString()
  @IsOptional()
  name?: string;

  @IsString()
  @IsOptional()
  email?: string;

  @IsString()
  @IsOptional()
  password?: string;
}
