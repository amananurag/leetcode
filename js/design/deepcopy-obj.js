function deepcopy(originalobj){
    let copiedobj = {};
    for(const key in originalobj){
    if(originalobj[key] instanceof Object && originalobj[key] !== null){
        copiedobj[key] = deepcopy(originalobj[key]);
    
    }else{
        copiedobj[key] = originalobj[key];
    }
    return copiedobj;
}
}

console.log(deepcopy({a:1, b:2, c:{d:3, e:4}})); // {a:1, b:2, c:{d:3, e:4}} 