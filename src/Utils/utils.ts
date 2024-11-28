import { test, expect } from '@playwright/test';

export class UtilClass{
    constructor(){
    }
    private i=0;


    getCustomName(name:string, i:number){
        return `Screenshots/${name+"_"+(this.i++)+"_"+(i)}.png`
    }
}

//       path: `Screenshots/Google_Masked_${Date.now()+"_"+(this.i++)}.png`,


