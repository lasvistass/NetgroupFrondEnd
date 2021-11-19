import { Recensione } from "./recensione";

export class Articolo{
    public nome: string= "";
    public prezzo: number= 0;
    public recensioni: Recensione[]=[];
}