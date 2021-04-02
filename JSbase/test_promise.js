function isFunction(fun){
    return typeof fun === 'function';
}
//promise三种状态
const PENDING = 'PENDING'
const RESOLVED = 'RESOLVED'
const REJECTED = 'REJECTED'

class MyPromise{
    constructor(handler){
        if (!isFunction(handler)) {
            throw new Error('MyPromise must accept a function as a parameter')
          }
        const self = this;
        self.status = PENDING;
        self.value = undefined;
        self.resolveCallback = [];
        self.rejectCallback = [];
        try {
            handler(self.resolve.bind(self), self.reject.bind(self));
        } catch (error) {
            // console.log(error)
            self.reject(error);
        }
    }
    

    resolve(value){
        const self = this;
        if(self.status !== PENDING) return;
        const run = ()=>{
            
            self.status = RESOLVED;
            const run_resolve = function(val){
                let cb;
                while(cb=self.resolveCallback.shift()){
                    cb(val);
                }
            }
            const run_reject = function(err){
                let cb;
                while(cb=self.rejectCallback.shift()){
                    cb(err);
                }
            }
            if(value instanceof MyPromise){
                console.log('Myyy')
                value.then(
                    val=>{self.value=val; run_resolve(val);},
                    err=>{self.value=err; run_reject(err);}
                );
            }else{
                self.value = value;
                run_resolve(value);
            } 
        }
        setTimeout(run, 0);
    }

    reject(error){
        const self = this;
        if(self.status !== PENDING) return;
        const run = ()=>{
            self.status = REJECTED;
            self.value = error;
            let cb;
            while(cb=self.rejectCallback.shift()){
                 cb(error);
            } 
        }
        setTimeout(run, 0);
    }

    then(onresolve, onreject){
        const self = this;
        let re = new MyPromise((resolvenext, rejectnext)=>{
            let success = value=>{
                console.log('success');
                try {
                    if(!isFunction(onresolve)){
                        resolvenext(value);
                    }else{
                        let res = onresolve(value);
                        console.log(res,cur);
                        if(res instanceof MyPromise){
                            res.then(resolvenext, rejectnext);
                        }else{
                            resolvenext(res);
                        }
                    }

                } catch (error) {
                    rejectnext(error);
                }
            }
            let fail = error=>{
                console.log('fail')
                try {
                    if(!isFunction(onreject)){
                        rejectnext(error);
                    }else{
                        let res = onreject(error);
                        if(res instanceof MyPromise){
                            res.then(resolvenext, rejectnext);
                        }else{
                            rejectnext(res);
                        }
                    }
                } catch (err) {
                    rejectnext(err);
                }
            }
            console.log(self.status)
            if(self.status === PENDING){
                self.resolveCallback.push(onresolve);
                self.rejectCallback.push(onreject);
            }else if(self.status === RESOLVED){
                success(self.value);
            }else{
                fail(self.value);
            }
        });
        return re;
    }

}
var s = new MyPromise((resolve, reject)=>{
        resolve(2);
});

var p = new MyPromise((resolve, reject)=>{
        resolve(s);
});

p.then(
    (value)=>{
        console.log('aa' + value)
    }
).then(
    (value)=>{
        console.log('aab' + value)
    }
)


