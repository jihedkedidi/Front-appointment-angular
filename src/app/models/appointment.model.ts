import { CureentUser } from "./currentUser.model";
import { product } from "./product.model";
import { User } from "./user.model";

export interface appointment{
    id:number;
    date:Date;
    heure:string;
    minutes:string;
    location:string;
    status:AppointmentStatus;
    user:User;
    product:product;
}
export enum AppointmentStatus {
    PENDING = "en attente",
    CONFIRMED = "confirme",
    CANCELED = "annule"
}


   