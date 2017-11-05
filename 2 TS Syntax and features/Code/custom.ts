class Emp{
    private x:number;
    constructor(x:number, private y:number){
        this.x = x;
    }
    public show():void{

    }
}

function addition(x:number, y : number):number{
    //console.log("Addition ");
    return x + y;
}
var result = addition(100,200);
console.log("Result is ",result);