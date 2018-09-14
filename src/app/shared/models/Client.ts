import { TypeDocument } from "./TypeDocument";

export interface Client {

    position? : number;
    id? : number;
    name : string;
    lastName : string;
    email : string;
    address : string;
    phone : string;
    document : string;
    typeDocument : TypeDocument;
    eliminated? : string;
} 