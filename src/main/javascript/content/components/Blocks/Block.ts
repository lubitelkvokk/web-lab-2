import Parametres from ".././Parametres";
import {stylesheetToCSSStylesConvertation} from "../../utils/StylesheetToCSSStyles";


export default class Block{
    protected tag: string;
    protected id: string;
    protected content: string;

    constructor(tag:string, id: string, content: string) {
        this.tag = tag;
        this.id = id;
        this.content = content;
    }

    toHTML() {
        return `<${this.tag}
        ${this.id ? `id="${this.id}"` : ""}> 
        ${this.content}
        </${this.tag}>`;
    }


}