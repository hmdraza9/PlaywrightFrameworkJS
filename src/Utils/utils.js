export class UtilClass{
    // static i=0;
    constructor(){
    }


    static getCustomName(name, i){
        const tempText = `Screenshots/${name}_${Date.now()}_${(i++)}.png`;
        console.log("In UtilClass, returned text: "+tempText)
        return tempText;
    }
}
