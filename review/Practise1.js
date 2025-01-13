class CustomError extends Error{
    constructor(message,errorCode){
        super(message);
        this.name= this.constructor.name;
        this.errorcode= this.errorCode;
        error.captureStackTrace(this, this.constructor);
    }
    toString(){
        return `[${this.name} - Code: ${this.errorCode}] ${this.message}`;
    }
}

try{
    throw new CustomError("Wrong",400);
}
catch(error){
    console.log(error.toString());
    console.log(error.stack);
    
    
}