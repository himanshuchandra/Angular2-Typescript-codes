interface Emp{
    name:string,
    id:number
}

function test(emp:{name:string,id:number}){

}
test({name:'Ram',id:1001});
// Interface with Params
function show(emp:Emp){
    console.log(emp.id + " "+emp.name);
}
show({id:1001,name:'Ram'});
//show({rollno:1001,sname:'Ram'});

// INterface with Class
interface E{
    show():void;
}
class E1 implements E
{
    show():void{
        console.log("Show ")
    }
}

// Interface with Functions 
interface E2{
    (x:number,y:number):number;
}
let y :E2;
y=function(x:number,y:number):number{
    return x + y;
}
console.log("Y is ",y(100,200));


interface Z1{
    show():void
}
interface Z2 extends Z1{
    
}