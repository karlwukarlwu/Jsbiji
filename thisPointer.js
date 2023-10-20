"use strict"
const obj = {
    name: 'c1',
    sayHi: function () {
        console.log(this)
        // 以方法调用的方式调用，this指向调用该方法的对象
        //{ name: 'c1', sayHi: [Function: sayHi] }

        function inner() {
            console.log("I'm inner", this)//I'm inner undefined

        }
        //以函数调用的方式调用，严格模式 this指向undefined
        inner()
        //I'm inner undefined

        const t2 = () => {
            console.log("I'm t2", this)
        }
        // 以箭头函数的方式调用，this指向定义时所在的对象
        t2()//I'm t2 { name: 'c1', sayHi: [Function: sayHi] }


    }

}
obj.sayHi()
//普通函数看最开始谁调用的
//箭头函数看最开始定义的时候谁调用的