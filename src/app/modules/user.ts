import { Role } from "./role";

export class User{
    public id: number=0;
    public username: string="";
    public email: string="";
    public phone: string="";
    public name: string="";
    public businessTitle: string="";
    public roles: Role[] = [];

}