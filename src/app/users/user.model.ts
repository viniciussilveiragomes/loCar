import { UserService } from "./user.service";
import { UsersComponent } from "./users.component";

export interface Users {
    id: number;
    email: string;
    first_name: string;
    last_name: string;
    avatar: string;
}

export interface User {
    id: number;
    first_name: string;
    last_name: string;
    data: User;
}


export interface ResponseUsers {
    page: number;
    per_page: number;
    total: number;
    total_pages: number;
    data: Users[];
}

export interface RequestCreate {
    name: string;
    job: string;
}

export interface ResponseCreate {
    name: string;
    job: string;
    id: string,
    createdAt: Date;
}

export interface ResponseUser {
   data: User;
}

export interface RequestUpdate {
    name: string;
    job: string;
}

export interface ResponseUpdate {
    name: string;
    job: string;
    updatedAt: Date;
}



