import {IsNotEmpty } from "class-validator";

export class CreateUserDto {
    id:number;
    @IsNotEmpty()
    fname:string;
} 