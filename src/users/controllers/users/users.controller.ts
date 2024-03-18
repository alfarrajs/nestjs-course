import { Body, Controller, Get , Param, Post, Req , Res, UsePipes,ValidationPipe} from '@nestjs/common';
import { CreateUserDto } from 'src/users/dtos/CreateUser.dto';
import { Request, Response } from 'express';
@Controller('users') // The @Controller() decorator defines a new controller
export class UsersController {
    @Get()
    findAll():object {
        return {message:"hello world"}
    }
    @Get('test')
    test():object {
        return {message:"test mock data"}
    }

    @Post()
    @UsePipes(new ValidationPipe())
    createUser(@Body() body:CreateUserDto) {
        console.log(body);
        return {};
    }

    @Get(':id/:postId')
   
    findOne(@Param('id') id:string , @Param('postId') postId:string){
        return {message:`you have requested for the user with id ${+id} abd postId ${+postId}`};
    }



}
