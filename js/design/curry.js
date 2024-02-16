function curry(fn){
    return function curried(...args){
        if(args.length>=fn.length){
            return fn(...args)
        }else{
            return (...moreargs) => {
                return curried(...args,...moreargs)
        }
    }
}
}

console.log(curry((a,b,c)=>a+b+c)(1)(2)(3))//6
console.log(curry((a,b,c)=>a+b+c)(1,2)(3))//6
console.log(curry((a,b,c)=>a+b+c)(1,2,3))//6
console.log(curry((a,b,c)=>a+b+c)(1)(2,3))//6