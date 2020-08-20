import { Property } from './property'

export class Agent {
    aid:number;
    username:string;
    password:string;
    image_url:string;
    email:string;
    phone:string;
    propertyList:Property[];

    constructor(aid:number, username:string, password:string, image_url:string, email:string, phone:string, propertyList:Property[]){
        this.aid = aid;
        this.username = username;
        this.password = password;
        this.image_url = image_url;
        this.email = email;
        this.phone = phone;
        this.propertyList = propertyList;
    }
}