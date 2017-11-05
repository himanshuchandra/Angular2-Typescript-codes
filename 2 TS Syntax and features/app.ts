// Type in TypeScript
// function show(){
//     let name="Amit Srivastava";
//     console.log("Name is ",name);
//     name = 20;
//     console.log("Name is :: ",name)
// }
// show();

function typeScriptStyle(){
    let name:string = "Amit Srivastava";
    let age:number = 21;
    //age = "gdfg";
    let attendance:boolean = true;
    let data:any= 1000;
    data="Ram";
    data = true;
}

// define an array
var name:string[]=["amit","ram","shyam"];

// define an tuple
var empRecord:[string,number,string,boolean]=["Ram",21,"Delhi",true];
console.log("Emp Record is ",empRecord);

// define an enum
enum WeekDays {
    SUNDAY,MONDAY,TUESDAY=7,WEDNESDAY,THURSDAY=6,FRIDAY,SATURDAY
};
var day:WeekDays = WeekDays.SUNDAY;
console.log("SUN Day is :: ",day);
day = WeekDays.MONDAY;
console.log("MON Day is ",day);
day = WeekDays.TUESDAY;
console.log("TUES DAY IS ",day);
day = WeekDays.WEDNESDAY;
console.log("WED DAY IS ",day);
day = WeekDays.THURSDAY;
console.log("THU DAY IS ",day);
day = WeekDays.FRIDAY;
console.log("FRI DAY IS ",day);

// Function with Types
function add(x:number,y:number):number{
        return x + y;
}

var result = add(1000,2000);
console.log("Result is ",result);

function show():void{
    console.log("This is a void function, i cant return anything");
   // return 1000; // Error
}

// function type variable
var e:(a:number,b:number)=>number;
e = add;
//e = show; // give error
// Object type variable
var k :{name:string,age:number,city:string}={name:"Ram",age:21,city:"Delhi"};

// Define object type alias name so we can assign the same type to other objects (Reusable feature)
type myalias ={name:string,age:number,phone:number};
var a1:myalias = {name:'Shyam',age:21,phone:99999};
var a1:myalias = {name:'Tim',age:22,phone:99999};


// any type is more generic  so we have union
var mydata: string|number;
mydata = "Hello";
mydata = 20;

// Come from TS 2.0 . never means give always error , never give any value
function alwaysGiveError():never{
    throw new Error("I Give Error");
}

// Strict null checks so no one can add null to number , string , boolean types
// Bad code is 
var zipcode = 110007;
zipcode = null; // Wrong 
// Solution is add entry in tsconfig.json ("strictNullChecks": true)

// tsconfig.json // "noEmitOnError": true, Force TypeScript not to generate JS if TS has any error
// "sourceMap"" : true (Create Bridge file b/w ts and js so we can debug ts in chrome)
// "noImplicitAny": true , now u need to define type any , if u need specify any data type

//  "noUnusedLocals": true,       // Local Variable must be initalize before use,        
  //   "noUnusedParameters": true,  for unused function paramters         
    
 
//e.g
function display(y:number):number{
    let x:number;
    
    if(true){
        x = 1000;
    }
    return x;
}
var rrr = display(100);
console.log("Display is ",rrr);