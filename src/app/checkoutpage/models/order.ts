import { Billinginfo } from "./billinginfo";
import { Shippinginfo } from "./shippinginfo";
import { CartItems } from 'src/app/cart';
export interface Order {
    billinginfo :Billinginfo,
    shippinginfo :Shippinginfo,
    cartitems : CartItems[],
    totalbill :number,
    itemscount:number,
}