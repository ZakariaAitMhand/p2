import { Agent } from './agent';
import { PropertyType } from './property-type';
export class Property {
    
    pid:number = 0;
    price:number;
    location:string;
    square_feet:number;
    image_url:string;
    agent:Agent;
    propertyType:PropertyType;
    sold: boolean;

    constructor(pid:number, price:number, address:string, square_feet:number, image_url:string, agent:Agent, propertyType:PropertyType, sold: boolean){
        this.pid = pid;
        this.price = price;
        this.location = address;
        this.square_feet = square_feet;
        this.image_url = image_url;
        this.agent = agent;
        this.propertyType = propertyType;
        this.sold = sold;
    }
}