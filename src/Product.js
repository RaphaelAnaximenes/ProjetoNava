class Product{
 
    #name
    #value
    #type
    
    constructor({ name, value, type}){

        this.#name = name;
        this.#value = value;
        this.#type = type;    
        
    }
    
    get name(){
        const preffix = this.#type;
        return `${preffix} ${this.#name}`

    }


    get value(){
        const preffix = "$";
        return `${preffix} ${this.#value}`

    }

    get price(){
        const priceMod = this.#value*0.1
        const preffix = "$";
        return `${preffix} ${this.#value + priceMod}`
    }


    
}

module.exports = Product // Exports the class