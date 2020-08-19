export class Agent {
    
    aId:number;
    username:string;
    image:string;

    constructor(aId:number,image:string, username:string){
        this.username = username;
        this.image = image;
        this.aId = aId;
    }
}