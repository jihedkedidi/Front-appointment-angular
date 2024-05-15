export interface LoginResponse{
    token:string;
    message:string;
    ok:Boolean;
    roles: string[];
    email:string;
}