export class UtilClass{
    static i=0;
    constructor(){
    }


    getCustomName(name, i){
        return `Screenshots/${name+Date.now()+(i++)}.png`
    }
}
