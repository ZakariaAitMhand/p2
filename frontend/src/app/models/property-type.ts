import {Property} from './property';

export class PropertyType {

    ptid:number = 0;
    description:string = '';
    properties:Property[];

    constructor(ptid:number, description:string, properties:Property[]){
        this.ptid = ptid;
        this.description = description;
        this.properties = properties;
    }
}