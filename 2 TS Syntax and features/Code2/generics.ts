// Generic with function
function output<T>(x:T){
    return x;
}
output("Hello").length;
output(100).toExponential();

// Generic with Array
var tt:Array<number>=[10,20,30];

// Generic with Classes
// <T extends number|string>
//<T,E>
class VV<T extends number|string>
{
    display(x:T, y:T):T{
        return x;
    }    
}
var v1  = new VV<number>();

v1.display(100,200);

var v2  = new VV<string>();

v1.display("Hello","Hi");

