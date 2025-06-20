export interface IUSer {
    firstName : string,
    lastName : string,
    email : string,
    password : string,
    role : "user" | "admin"
}