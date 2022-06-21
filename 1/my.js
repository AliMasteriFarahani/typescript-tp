"use strict";
// {
//     var firstName: string = "Ali";
//     var lastName: string = "Farahani";
//     var fullname: string = firstName + lastName;
//     let isMale:Boolean = false;
// }
exports.__esModule = true;
// function calc(x:any[],y:string):Number{   // :void
//     let total = x.length + y.length;
//     return total;
// }
// var animal ={
//     name:'moosh'
// }
// calc('i',animal.name);
// -6 : union types :
//=====================================
// function totalLength(x:(string | any[]),y:(string | any[])):any{
//     var total:Number = x.length + y.length;
//     x.slice(0);
//     if(x instanceof Array){
//         x.push('ali');
//     }
//     if(x instanceof String){
//         x.substr(0);
//     }
//     return total;
// }
// let total =  totalLength('ali','farahani');
// let lname = 'Ali';
// console.log(lname);
// {
//     let lname = 'Reza';
//     console.log(lname);
// }
// function/method overloading :
//=================================
// error
// function sum(x:string,y:string):string{
//     let total = x + ' '+y;
//     return total;
// }
// function sum(x:number,y:number):number{
//     let total = x+y;
//     return total;
// }
// ---------------------------------
// function fullname(x:string,y:string,c:string):string
// function fullname(x:string,y:string):string{
//         return x + y;
// }
//fullname('ali','reza');
// ----
// function totalLength(x:string,y:string):number
// function totalLength(x:any,y:any):number
// function totalLength(x:(string | any[]),y:(string | any[])):number{
//     let total = x.length + y.length;
//     x.slice(0);
//     if(x instanceof Array){
//     }
//     if(x instanceof String){
//     }
//     return total;
// }
// totalLength('ali','reza');
// totalLength(['ali','reza'],['farahani','irani']);
// custom types : --> interface :
//=================================
// interface IPerson {
//     name:string,
//     family:string
//     age:number,
//     email?:string,
//     gender:Gender
// }
// function register(person:IPerson){
//     console.log(`${person.name} ${person.family}  ${person.gender} ${person.email}`);
// }
//register('ali','resa','eerer') --- > error
// enum Gender{
//     male,
//     female
// }
// var ali:IPerson = {
//     name:'ali',
//     family:'farahani',
//     age:26,
//     gender:Gender.male
// }
// register(ali);
// interface IPersonService{
//     add(person:IPerson):IPerson;
//     delete(person:IPerson):void;
//     getAll():IPerson[];
//     getById(personId:number):IPerson
// }
// custom types : --> enum :
//=================================
// enum Days{
//     shanbeh,
//     yekshanbeh,
//     doshanbeh,
//     seshanbeh,
//     chaharshanbe
// }
// console.log(Days.shanbeh);
// enum Days{
//     shanbeh = 11,
//     yekshanbeh = 13,
//     doshanbeh = 15,
//     seshanbeh = 14,
//     chaharshanbe = 17
// }
// console.log(Days.shanbeh);
// console.log(Days[11]);
// enum Colors{
//     red = '#34343',
//     green = '#3rerer',
//     blue = '#ererer',
// }
// console.log(Colors.green);
// enum Gender{
//     male,
//     female
// }
// function sayhello(genderType:Gender){
//     if (genderType == Gender.male) {
//         console.log('hello male');
//     }else{
//         console.log('hello female');
//     }
// }
// sayhello(Gender.male)
//======================================
// custom types : --> anonymous types :
//======================================
// var todo: { name: string };
// todo = {
//     name: "Ali",
// };
// console.log(todo);
// function totalLength(x: { length: number }, y: { length: number }): number {
//     let total = x.length + y.length;
//     return total;
// }
// let x = {
//     length: 2,
// };
// console.log(totalLength(x, x));
// function login(user:{username:string,password:number}):void{
//     console.log(user.username);
//     console.log(user.password);
// }
// let user = {username:'ali-farahani',password:22222}
// login(user)
//======================================
// class :
//======================================
// class Person {
//     constructor(name: string, family: string) {
//         this.name = name;
//         this.family = family;
//     }
//     name = "";
//     family = "";
// }
// function register(person: Person) {
//     console.log(person.name + " " + person.family);
// }
// let person = new Person('Ali','Farahani');
// register(person);
// let person = new Person();
// person.name = "Ali";
// person.family = "Farahani";
// -----------
// interface IPer {
//     add(name:string):string
// }
// class Per implements IPer{
//     add(name: string): string {
//         throw new Error("Method not implemented.");
//     }
// }
//======================================
// class - static members:
//======================================
// class Person {
//     static id=0;
//     constructor(name: string, family: string) {
//         this.name = name;
//         this.family = family;
//     }
//     name :string;
//     family :string;
//     fullname(): string {
//         return this.name + " " + this.family;
//     }
//     static getNextId(){
//         this.id +=1;
//     }
// }
// let person1 = new Person("Ali", "Farahani");
// console.log(person1.fullname());
// console.log(Person.id);
// Person.getNextId()
// let person2 = new Person("mohammad", "akbari");
// console.log(person2.fullname());
// console.log(Person.id);
// Person.getNextId()
// let person3 = new Person("mina", "hamidi");
// console.log(person3.fullname());
// console.log(Person.id);
// Person.getNextId()
//======================================
// class - setter & getter :
//======================================
// interface ITodos {
//     name: string;
//     state: TodoState;
// }
// enum TodoState {
//     New,
//     Active,
//     Delete,
//     Complete,
// }
// var todo = {
//     name:"Ali",
//     state:TodoState.Active
// }
// console.log(todo.state);
// var todo = {
//     name:"Ali",
//     get state(){
//         return this._state;
//     },
//     set state(newState){
//         if (newState == TodoState.Complete) {
//             let canBeComplete = this.state == TodoState.Active || this.state == TodoState.Delete;
//             if (!canBeComplete) {
//                 throw 'there is an error ...';
//             }
//         }
//         this._state = newState
//     }
// }
// todo.state = TodoState.Complete
//  console.log(todo.state);
// class SmartTodo {
//     name: string;
//     _state : TodoState;
//     constructor(name: string) {
//         this.name = name;
//     }
//     get state() {
//         return this._state;
//     }
//     set state(newState) {
//         if (newState == TodoState.Complete) {
//             let canBeComplete = this.state == TodoState.Active || this.state == TodoState.Delete;
//             if (!canBeComplete) {
//                 throw "there is an error ...";
//             }
//         }
//         this._state = newState;
//     }
// }
// var todo = new SmartTodo("bank");
// todo.state = TodoState.Active;
//======================================
// 14- inheritance :
//======================================
// interface ITodo {
//     name: string;
//     state: TodoState;
// }
// enum TodoState {
//     Active,
//     Deleted,
//     Complete,
// }
// class TodoStateChanger {
//     constructor(private newState: TodoState) {
//     }
//     canChangeState(todo:ITodo):boolean{
//         return !!todo;
//     }
//     changeState(todo:ITodo):ITodo{
//         if (this.canChangeState(todo)) {
//             todo.state = this.newState;
//         }
//         return todo;
//     }
// }
// class CompleteTodoStateChanger extends TodoStateChanger{
//       constructor(){
//           super(TodoState.Complete)
//       }
//       canChangeState(todo: ITodo): boolean {
//         return this.canChangeState(todo) && (todo.state == TodoState.Active || todo.state == TodoState.Deleted);
//       }
// }
// let st = new CompleteTodoStateChanger();
//======================================
// 15-  abstract class and methods :
//======================================
// interface ITodo {
//     name: string;
//     state: TodoState;
// }
// enum TodoState {
//     Active,
//     Deleted,
//     Complete,
// }
// abstract class TodoStateChanger {
//     constructor(private newState: TodoState) {
//     }
//     abstract canChangeState(todo:ITodo):boolean;
//     changeState(todo:ITodo):ITodo{
//         if (this.canChangeState(todo)) {
//             todo.state = this.newState;
//         }
//         return todo;
//     }
// }
// class CompleteTodoStateChanger extends TodoStateChanger{
//       constructor(){
//           super(TodoState.Complete)
//       }
//       canChangeState(todo: ITodo): boolean {
//         return !!todo && (todo.state == TodoState.Active || todo.state == TodoState.Deleted);
//       }
// }
// let st = new CompleteTodoStateChanger();
//======================================
// 16- access modifiers :
//======================================
// class Person{
//     private name:string;
//     protected age:number;
//     public family:string
//     protected getAmount(){
//         return 125000;
//     }
// }
// class Employee extends Person{
//     age = 10;
//     constructor(){
//         super();
//         this.age = 10;
//     }
//     getSalary(){
//         this.getAmount();
//     }
// }
// var p = new Person();
// var e = new Employee();
//--------------------------
// interface ITodo {
//     name: string;
//     state: TodoState;
// }
// enum TodoState {
//     Active,
//     Deleted,
//     Complete,
// }
//abstract class TodoStateChanger {
// way 1 :
// newState:TodoState;
// constructor(newState: TodoState) {
//     this.newState = newState;
// }
// way 2 :
//     constructor(protected newState: TodoState) {}
//     abstract canChangeState(todo: ITodo): boolean;
//     changeState(todo: ITodo): ITodo {
//         if (this.canChangeState(todo)) {
//             todo.state = this.newState;
//         }
//         return todo;
//     }
// }
// class CompleteTodoStateChanger extends TodoStateChanger {
//     constructor() {
//         super(TodoState.Complete);
//         this.newState;
//     }
//     canChangeState(todo: ITodo): boolean {
//         return !!todo && (todo.state == TodoState.Active || todo.state == TodoState.Deleted);
//     }
// }
// let st = new CompleteTodoStateChanger();
// class TodoService {
//     private static _lastId: number = 0;
//     constructor(private todos:ITodo[]){}
//     private get nextId() {
//         return TodoService._lastId;
//     }
//     private set nextId(nextId) {
//         TodoService._lastId = nextId - 1;
//     }
//     static getNextId() {
//         return (TodoService._lastId += 1);
//     }
//     add(todo:ITodo){
//         var newId = this.nextId;
//     }
//     private getAll(){
//         return this.todos;
//     }
// }
//======================================
// 17-  :
//======================================
//======================================
// 18- generic :
//======================================
// function clone<T>(value:T):T{
//   let serialize = JSON.stringify(value);
//   return JSON.parse(serialize);
// }
// var todo:ITodo={
//     id:1,
//     name:'Ali',
//     state:TodoState.Active
// }
// clone<string>('Ali');
// clone<number>(123);
// clone<ITodo>(todo);
//---------------
//let array1:number[]=[1,2,3]
//let array2:Array<number>=[4,5,6]
// class KeyValuePair<TKey,TValue>{
//     constructor(public key:TKey,public value:TValue){}
// }
// let pair1 = new KeyValuePair<number,string>(22,'Farahani');
// let pair2 = new KeyValuePair<string,Date>('Ali',new Date(Date.now()));
// let pair3 = new KeyValuePair<number,string>(11,'Ali');
// class KeyValuePairPrinter<T,V>{
//     constructor(private pairs:KeyValuePair<T,V>[]){}
//     print(){
//         for (const p of this.pairs) {
//             console.log(p.key,p.value);
//         }
//     }
// }
// let printer = new KeyValuePairPrinter([pair1,pair2])  // type error
// let printer = new KeyValuePairPrinter([pair1,pair3])
// printer.print();
//----------------------------------------------------------
// function totalLength (x:{length:number},y:{length:number}){
//     let total:number =  x.length + y.length;
//     return total;
// }
// var length = totalLength('asds',[2,3,5])
//----------------
// interface IIhaveLength{
//     length:number
// }
// function totalLength<T extends IIhaveLength> (x:T,y:T){   /// <T extends {length:number}>
//     let total:number =  x.length + y.length;
//     return total;
// }
// var length = totalLength('gfhkh','cghjgjg')
//======================================
// 19- modules :
//======================================
//======================================
// 20- load modules :
//======================================
//import * as all from './model';
var model_1 = require("./model");
var DataAccess_1 = require("./DataAccess");
var service = new DataAccess_1.TodoService([]);
var task1 = {
    id: 11,
    name: "Ali",
    state: model_1.TodoState.Active
};
var task2 = {
    id: 13,
    name: "mohammad",
    state: model_1.TodoState.Active
};
service.add(task1);
service.add(task2);
var todos = service.getAll();
todos.forEach(function (todo) {
    console.log("".concat(todo.name, " [").concat(model_1.TodoState[todo.state], "]"));
});
// npm install systemjs ---> this is a module loader
