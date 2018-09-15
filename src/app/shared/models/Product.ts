import { ProductPrice } from "./ProductPrice";
import { ProdutStock } from "./ProductStock";

export interface Product {

    id? : number;
    codebar : string;
    name : string;
    brand : string;
    description : string;
    productPrice : ProductPrice;
    productStock : ProdutStock;

}