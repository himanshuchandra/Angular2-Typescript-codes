class Employee{
    private static autoNumber:number=10;
    private id:number;
    public name:string; //default is public 
    salary:number;
    protected designation:string;
    constructor(name:string, public companyName:string){
        this.name = name;
        this.id = Employee.autoNumber++;

    }
    public print():void{
        console.log(`Id is ${this.id} and Name is ${this.name} and Company Name is ${this.companyName}`);
    }
}
var ram = new Employee("Ram","TCS");
ram.print();