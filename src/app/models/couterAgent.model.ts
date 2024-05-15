import { product } from "./product.model";
import { User } from "./user.model";

export interface CounterAgent{
    id:number;
    product:product;
    location:string;
    user:User;
}