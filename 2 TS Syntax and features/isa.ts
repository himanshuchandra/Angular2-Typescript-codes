abstract class Banking{
constructor(){

}
abstract show():void;
}
class Account extends Banking{
        constructor(protected accountid:number, private accountname:string,public balance:number){
            super();

        }
        show():void{
            console.log("Define Abstract method...");
        }

}
class SavingAccount extends Account{
    private _roi:number;
    constructor(accid:number, private type:string, balance:number){
        super(accid,"Saving",balance);
    }
    printDetails():void{
        console.log(`Id is ${this.accountid} Name is ${this.balance}`);
        console.log(`Type is ${this.type}`);
    }

    // Setter Getter
    set roi(data:number){
        if(data>0){
            this._roi = data;
        }
        else{
            this._roi = 5;
        }
    }
    get roi(){
        return this._roi;
    }
}

var sa = new SavingAccount(10,"Saving Account",9000);
sa.roi=-10;
console.log("ROI is ",sa.roi);