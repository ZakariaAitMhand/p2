import {Property} from './property';

export class PropertyType {

    ptid:number;
    description:string;
    properties:Property[];

    constructor(ptid:number, description:string, properties:Property[]){
        this.ptid = ptid;
        this.description = description;
        this.properties = properties;
    }
}