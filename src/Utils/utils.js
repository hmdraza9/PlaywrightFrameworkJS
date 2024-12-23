export class UtilClass{
    // static i=0;
    constructor(){
    }


    static getCustomName(name, i){
        const tempText = `Screenshots/${name}_${Date.now()}_${(i++)}.png`;
        console.log("In UtilClass, returned text: "+tempText)
        return tempText;
    }


    static getTodayDateddMMMyyyy(){
        const today = new Date();
        const options = { day: '2-digit', month: 'short', year: 'numeric' };
        const formattedDate = today.toLocaleDateString('en-GB', options).replace(',', '');
        return formattedDate;
    }
}
