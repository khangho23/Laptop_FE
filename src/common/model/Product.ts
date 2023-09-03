import { Color } from "./Color";
import { Brand } from "./Brand";

export interface Product {
    id: number,
    name: string,
    ram: string,
    display: string,
    rom: string,
    puslishedDate: null,
    os: string,
    price: number,
    quantity: number,
    logo: string,
    brand: Brand
    color: Color,
    publishedDate: string
}