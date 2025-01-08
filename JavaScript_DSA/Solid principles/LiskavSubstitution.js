//we cannot extend the Base class it has method we cannot extend the base class to the other class 

class Bird{
    layegg(){
        //
    }
}

class FlyingBird{
    fly(){

    }
}
class Eagle extends FlyingBird{

} 
class Eagle extends Bird{
    
}

const eagle =new Eagle();
eagle.fly();
eagle.dive();

