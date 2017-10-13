var ParentCalc = /** @class */ (function () {
    function ParentCalc(firstNumber) {
        this.firstNumber = firstNumber;
    }
    ParentCalc.prototype.disp = function () {
        // this.firstNumber="dsfdsf";   //will give error
        this.temp = "Hello";
        this.temp = 1000;
    };
    return ParentCalc;
}());
var Calc = /** @class */ (function () {
    //secondNumber:number;
    function Calc(firstNumber, secondNumber) {
        this.secondNumber = secondNumber;
        this.firstNumber = firstNumber;
        // super(firstNumber);
    }
    ;
    Calc.prototype.addition = function () {
        return this.firstNumber + this.secondNumber;
    };
    Calc.prototype.show = function () {
        console.log("this is a show");
    };
    ;
    Calc.prototype.subtract = function () {
        return this.firstNumber - this.secondNumber;
    };
    return Calc;
}());
window.addEventListener("load", init);
function init() {
    document.getElementById("add").addEventListener("click", doAdd);
}
function doAdd() {
    var fno = parseInt(document.querySelector("#firstno").value);
    var sno = parseInt(document.querySelector("#secondno").value);
    var calc = new Calc(fno, sno);
    var result = calc.addition();
    document.getElementById("result").innerHTML = "" + result;
}
