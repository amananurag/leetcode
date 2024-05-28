class EventEmitter {
    listener = {}
    addEventListener(eventName,fn){
        this.listerner[eventName] = this.listerner[eventName] || [];
        this.listerner[eventName].push(fn);
        return this;
    }

    on(eventName, fn){
        return this.addEventListener(eventName,fn)
    }
    removeListener(eventName,fn){
        let li = this.listener[eventName]
        if(!li) return this;
        for(let i=li.length-1;i>=0;i--){
            if(li[i]===fn){
                this.listener[eventName].splice(i,1);
                break;
               
            }
        } 
        return this;
    }
    Off(eventName,fn){
        return this.removeListener(eventName,fn);
    }
    once(eventName,fn){
        listerner[eventName] = this.listerner[eventName] || [];
        const onceWrapper = () => {
             fn();
             this.Off(eventName,fn);
        } 
        this.addEventListener[eventName].push(onceWrapper);
        return this;
    }
    emit(eventName, ...args) {
        let fns = this.listeners[eventName];
        if (!fns) return false;
        fns.forEach((f) => {
          f(...args);
        });
        return true;
    }
    listenerCount(eventName) {
        let fns = this.listeners[eventName] || [];
        return fns.length;
    }
    rawListeners(event) {
        return this.listeners[event];
    }
}