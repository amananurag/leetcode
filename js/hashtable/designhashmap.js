class HashMap{
    constructor(){
        this.map={};
    }
    get(key){
        return this.map[key];
    }
    put(key,value){
        this.map[key]=value;
    }
    remove(key){
        delete this.map[key];
    }
}