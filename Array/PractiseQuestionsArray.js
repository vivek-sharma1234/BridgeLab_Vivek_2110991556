//1.find a maximum and minimum element in arrey
let array =[1,2,3,4,5];
let max=Math.max.call(null,...array);
let min= Math.min.apply(null,array);
console.log(max);
console.log(min);

//implement a function to reverse an array
function reverse(arr){
    arr.reverse();
    console.log(arr);
    
}
let arr=[5,6,4,3,5];

//Evaluationof postfix Expression 
class Stack{
    constructor(){
        this.items=[];
    }
    push(element){
        this.items.push(element);
    }
    pop(){
        if(this.items.length===0){
            return "underFlow";
        }
        return this.items.pop();
    }
}
function fixEvalution(exp){
    let stack=new Stack();
    for(i=0;i<exp.length;i++){
        let c=exp[i];
        if(!isNaN(c)){
            stack.push(c-'0');
        }
        else{
            let val1=stack.pop();
            let val2=stack.pop();
            if(val1=="UnderFlow" || val2=="UnderFlow"){
                return "can not perform postfix";
            switch(c){
                case '+':
                    stack.push(val2 + val1);
                    break;
                case '-':
                    stack.push(val2 + val1);
                    break;
                case '/':
                    stack.push(val2 + val1);
                    break;
                case '*':
                    stack.push(val2 + val1);
                    break;
                        
                }
            }

        }

    }
    return stack.pop();
}
console.log(fixEvalution("235*+8-"));
console.log(fixEvalution("23*+"));

