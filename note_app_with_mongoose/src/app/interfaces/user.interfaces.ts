export interface IUSer {
    firstName : string,
    lastName : string,
    age : number,
    email : string,
    password : string,
    role : 'USER'|'ADMIN'| 'SUPER-ADMIN'
}