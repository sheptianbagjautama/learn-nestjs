import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { User, UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) { }

    @Get()
    findAll() {
        return this.usersService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: number) {
        return this.usersService.findOne(id);
    }

    @Post()
    create(@Body() user: { id: number; name: string; age: number }) {
        this.usersService.create(user);
    }

    @Put(':id')
    update(@Param('id') id: number, @Body() user: { id: number; name: string; age: number }) {
        this.usersService.update(id, user);
    }

    @Delete(':id')
    remove(@Param('id') id: number) {
        this.usersService.delete(id);
    }
}