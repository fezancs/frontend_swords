export interface Product {
    price : number; 
    thumbnail : string,
    thumbnail_label	:string,
}

export interface FilteredProduct {
    price : number; 
    thumbnail : string,
    thumbnail_label	:string,
    sale:string,
    visibility:number,
    rating:number,
    sale_percent:number,
}