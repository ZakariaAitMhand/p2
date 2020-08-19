export class Property {
    
    pId:number = 0;
    price:number;
    location:string;
    squareFeet:number;
    imageURL:string;
    aId:number;

    constructor(price:number, address:string, squareFeet:number, imageFolderURL:string){
        this.price = price;
        this.location = address;
        this.squareFeet = squareFeet;
        this.imageURL = imageFolderURL;
    }
}