
class ParentCalc{
    protected firstNumber:number;
    private message:string;
    private attendance:boolean;
    private temp:any;
    disp():void{
        // this.firstNumber="dsfdsf";   //will give error
        this.temp="Hello";
        this.temp=1000;
    }

    constructor(firstNumber:number){
        this.firstNumber=firstNumber;
    }
}



class Calc{
    private firstNumber:number;  //instance variable
    //secondNumber:number;
    constructor(firstNumber:number,private secondNumber:number){  //secondNumber is instance variable created on go
        this.firstNumber=firstNumber;
        // super(firstNumber);
    };

    addition():number{
        return this.firstNumber+this.secondNumber;
    }
    show():void{
        console.log("this is a show");
    };
    subtract():number{
        return this.firstNumber-this.secondNumber;
    }
}

window.addEventListener("load",init);
function init(){
    document.getElementById("add").addEventListener("click",doAdd);
}
function doAdd(){
    var fno = parseInt(document.querySelector("#firstno").value);
    var sno = parseInt(document.querySelector("#secondno").value);
    var calc = new Calc(fno , sno);
    var result =  calc.addition();
    document.getElementById("result").innerHTML = ""+result;


}