class Singleton{
    private static singleObject:Singleton;
    private readonly name:string;
    private constructor(name:string){
        this.name = name;
    }
    public static getInstance():Singleton{
        if(!Singleton.singleObject){
            Singleton.singleObject = new Singleton("Ram");
        }
        return Singleton.singleObject;
    }
}
var obj1 = Singleton.getInstance();
var obj2 = Singleton.getInstance();
