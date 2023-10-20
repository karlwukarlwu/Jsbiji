// let c = 10;
// let d = 20;
// // let t = c||d;
// let t = c&&d;
// console.log(t)// 20


// let fn = function (a,b){
//     return a+b;
// }
//
// function f2(a,b){
//     return a+b;
// }
//
// // console.log(t1)
// let t1 = f2(10,fn(20,30));
//
// console.log(t1);// 60

// f1();//1
// f2();//报错
// function f1(){
//     console.log(1)
// }
// let f2 = function (){
//     console.log(2)
// }

// function ask(question, yes, no) {
//     if (confirm(question)) yes();
//     else no();
// }
//
// ask(
//     "Do you agree?",
//     function() { alert("You agreed."); },
//     function() { alert("You canceled the execution."); }
// );
// let askk = (a,b,c)=>{
//     question===true?yes():no();
// }

// let x = {};
// // console.log(x.prototype)
// let tm = 10;
// x[tm] = 10;
// console.log(x[tm])
// console.log(x.tm)
// let x = {
//     a:10,
// }
// x["aa"] = 20;
// console.log(x.aa)
// console.log(x.a)

// let user = {
//     name: "John",
//     age: 30,
//
//     sayHi() {
//         console.log( this.name ); // 导致错误
//     }
//
// };
//
//
// let admin = user;
// user = null; // 重写让其更明显
//
// admin.sayHi(); // TypeError: Cannot read property 'name' of null
"use strict"
// let c = {
//     a: 10,
//     b:function() {
//
//         let d=() => {
//             console.log(this)
//         }
//         d()
//         function f(){
//             console.log(this)
//         }
//         f()
//         console.log(this)
//     }
// }
//
// c.b()

// function makeUser() {
//     return {
//          name: "John",
//         ref: this
//     };
// }
//
// let user = makeUser();
// console.log(user)

// function User(name) {
//     this.name = name;
//     this.isAdmin = false;
//     return {name:"t"};
// }
// let t = new User("Jack");
// console.log(t)
//
// console.log(true?1:2)


// let t = {
//     name: "1233",
//     toString() {
//         return "123"
//     }
// };
// console.log(t+100)

// let user = {
//     name: "John",
//     money: 1000,
//
//     // 对于 hint="string"
//     toString() {
//         return "123";
//     },
//
//     // 对于 hint="number" 或 "default"
//     valueOf() {
//         return this.money;
//     }
//
// };
//
// console.log(+user); // valueOf -> 1000
// console.log(user+ 500); // valueOf -> 1500


// let t =[1,2,3]
// t.lc = 10;
// console.log(t[1])


// let t = {
//     a:10,
//     b:20,
//     c:30,
//     "dd":40
// }


// function showMenu({
//                       title = "Untitled",
//                       width: w = 100,  // width goes to w
//                       height: h = 200, // height goes to h
//                       items: [item1, item2] // items first element goes to item1, second to item2
//                   }) {
//     console.log( `${title} ${w} ${h}` ); // My Menu 100 200
//     console.log( item1 ); // Item1
//     console.log(item2 ); // Item2
// }
//
// let options = {
//     title: "My menu",
//     items: ["Item1", "Item2"]
// };
// showMenu(options);
// //
//
// function f1(a=10){
//     console.log(a)
// }
// f1()

//
// let user = {
//     name: "John",
//     years: 30
// };
// let t ={...user}
// console.log(t   )

// let {name, years:age, isAdmin = false} = user;
// console.log(name)
// console.log(age)
// console.log(isAdmin)

// function makeCounter() {
//     let count = 0;
//
//     return function() {
//         return count++;
//     };
// }
//
// let counter = makeCounter();
// console.log(counter())
// console.log(counter())
// console.log(counter())
// console.log(counter())
//
// let counter2 = makeCounter()
// console.log(counter2())
// console.log(counter2())
// console.log(counter2())
// console.log(counter2())
//
//

// let name = "John";
//
// function sayHi() {
//     console.log("Hi, " + name);
// }
//
// name = "Pete";
//
// sayHi();


// let t = function (a){
//     return function (b){
//         return a+b;
//     }
// }
// console.log(t(10)(20))

// console.log(a)
// {
//     var a = 10;
//     let c = 20
// }
// console.log(a)
// console.log(c)

// let t = function (a){
//     let c = 10;
// }
// console.log(t.name)

// function f1(){
//     console.log(1)
//     f1.time++;
// }
//
// f1.time = 0;
// f1();
// f1();
// f1();
// console.log(f1.time)

// function f1(){
//     let t = 10;
//     return function (){
//         t++;
//         return t;
//     }
// }
//
// let t = f1();
// t();
// t();
// t();
// t();
// console.log(t())

// let t = function f2(a){
//     if(a){
//         console.log("123")
//     }else {
//         console.log("456")
//         f2(true)
//     }
// }
// t()
// f2()

// let t = function f2(a){
//     let t = {}
//     t.a = 10;
//     return function (){
//
//     }
// }
// let t ={}
// t["ad"]=10
// console.log(t)
// t.acd = 20
// console.log(t)

// let t = function f2(a){
//     let t4 = new Map();
//     t.a = 10;
//     return function (){
//         return t4
//     }
// }
//
// let t2 = t();
// let t3 =t2()
// let t5 =t2()
// console.log(t3===t5)


// function f2(a,b){
//     console.log(a+b, this)
// }
//
// const obj = {name:123}
// f2.call(obj,1,2)
//
// let c = {}
// c.work = f2
// c.work(1,2)


//
// let worker = {
//     someMethod() {
//         return 1;
//     },
//
//     slow(x) {
//         // 可怕的 CPU 过载任务
//         console.log("Called with " + x);
//         return x * this.someMethod(); // (*)
//     }
// };
//
// // 和之前例子中的代码相同
// function cachingDecorator(func) {
//     let cache = new Map();
//     return function f23(x) {
//         if (cache.has(x)) {
//             return cache.get(x);
//         }
//         let result = func(x); // (**)
//         cache.set(x, result);
//         return result;
//     };
// }
//
// console.log( worker.slow(1) ); // 原始方法有效
//
// worker.slow = cachingDecorator(worker.slow); // 现在对其进行缓存
// let t =worker.slow
//
// console.log(t)
// console.log(true)

// console.log( worker.slow(2) );

// let user = {
//     firstName: "John",
//     sayHi() {
//         console.log(`Hello, ${this.firstName}!`);
//     }
// };
//
// // setTimeout(user.sayHi, 1000); // Hello, undefined!
//
//
// user.sayHi()
//
// let t = user.sayHi
// t()

// function defer(f, ms) {
//     return function(...args) {
//         let ctx = this;
//         setTimeout(function() {
//             return f.apply(ctx, args);
//         }, ms);
//     };
// }
// function sayHi(who) {
//     console.log('Hello, ' + who);
// }
//
// let sayHiDeferred = defer(sayHi, 2000);
// sayHiDeferred("John"); // 2 秒后显示：Hello, John


// let user = {
//     name: "John",
//     surname: "Smith",
//     get fullName() {
//         return `${this.name} ${this.surname}`;
//     },
//     set fullName(value) {
//         [this.name, this.surname] = value.split(" ");
//     }
// }
// console.log(user.fullName)
// user.fullName = "Alice Cooper";
//
// console.log(user.name); // Alice
// console.log(user.surname); // Cooper

// let animal = {
//     eats: true
// };
//
// function Rabbit(name) {
//     this.name = name;
// }
//
// Rabbit.prototype = animal;
//
// let rabbit = new Rabbit("White Rabbit"); //  rabbit.__proto__ == animal
//
// console.log( rabbit.eats ); // true
// function f1() {
//     this.a = 10;
//     this.b = 20;
// }
//
// console.log(f1.prototype)
// let t = f1.prototype
// console.log(t)
// console.log("C")

// class T1{
//     name = "123"
//     constructor() {
//         this.a = 10;
//         this.b = 20;
//         console.log(this.name)
//     }
//     sayHi(){
//         console.log(this.name)
//     }
// }
//
// class T2 extends T1{
//     name = "456"
//     constructor() {
//         super();
//         console.log(this.name)
//         this.c = 30;
//     }
// }
//  let c = new T2()
// c.sayHi()

// let error = new Error("Things happen o_O");
// console.log(error.name); // Error
// console.log(error.message); // Things happen o_O
//
// let promise = new Promise(function(resolve, reject) {
//     // 当 promise 被构造完成时，自动执行此函数
//
//     // 1 秒后发出工作已经被完成的信号，并带有结果 "done"
//     setTimeout(() => resolve("done"), 1000);
// });

// let t = "123"
// console.log(`${t}dfsdfsdf`)
// t = "1231231"

function f1(){
    for (let i = 0; i <5; i++) {
        setTimeout(function () {
            console.log(i)
        }, 1000)
    }
}
f1()