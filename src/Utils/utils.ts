export class UtilClass{
    constructor(){
    }
    private i=0;


    getCustomName(name:string, i:number){
        return `Screenshots/${name+Date.now()+(this.i++)}.png`
    }
}
