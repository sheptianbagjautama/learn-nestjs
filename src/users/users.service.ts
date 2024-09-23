import { Injectable } from '@nestjs/common';

export interface User {
    id: number;
    name: string;
    age: number;
}

@Injectable()
export class UsersService {
    private users: User[] = [];

    findAll(): User[] {
        return this.users;
    }

    findOne(id: number): User {
        return this.users.find(user => user.id === id);
    }

    create(user: User): void {
        this.users.push(user);
        console.log(this.users)
    }

    update(id: number, updatedUser: User): void {
        const userIndex = this.users.findIndex(user => user.id === id);
        if (userIndex > -1) {
            this.users[userIndex] = updatedUser;
        }
    }

    delete(id: number): void {
        this.users = this.users.filter(user => user.id !== id);
    }
}