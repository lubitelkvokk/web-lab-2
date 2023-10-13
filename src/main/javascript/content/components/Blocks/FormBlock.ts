import Block from "./Block";
import Parametres from "../Parametres";

export default
class FormBlock extends Block {

    private parameters: Parametres;

    constructor(tag: string, id: string, content: string, parameters: Parametres) {
        super(tag, id, content);
        this.parameters = parameters;
    }


    toHTML(): string {
        return `<${this.tag}
            ${this.parametersToString(this.parameters)}
            ${this.id ? `id="${this.id}"` : ""}> 
            ${this.content}
        </${this.tag}>`;
    }

    parametersToString(parameters: Parametres) {
        let result = "";
        for (let key in parameters) {
            result += key + '="' + parameters[key] + '" ';
        }
        // console.log(result);
        return result;
    }

}