function call(a,b){
    return a+b;
}
//  call(a,b)
function call(a){
    return function (b){
        return a+b;
    }
}
// call(a)(b)

function apply(a,b,c,d){
    return a+b+c+d;
}
//apply(a,b)(c,d)

function apply(a,b){
    return function (c,d){
        return a+b+c+d;
    }
}

// infinite calls
// add(1)(2)......(n)
function add(a){
    return function (b){
        if(b){
            return add(a,b)
        }else{
            return a;
        }
    }
}

//infinte args
// add(1...n)(2...n)

function add(...args){
    let a = args.reduce((a,b)=> a+b,0);
    return function(...args){
        let b = args.reduce((a,b)=> a+b,0);
        if(b){
            return add(a,b);
        }else{
            return add;
        }
    }
}