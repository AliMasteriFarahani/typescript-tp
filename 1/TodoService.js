// interface IIdGenerator{
//     nextId:number
// }
// class TodoService implements ITodoService,IIdGenerator {
//     private static _lastId: number = 0;
//     constructor(private todos:ITodo[]){}
//     get nextId() {
//         return TodoService._lastId;
//     }
//     static getNextId() {
//         return (TodoService._lastId += 1);
//     }
//     add(todo:ITodo){
//         todo.id = this.nextId;
//         this.todos.push(todo);
//         return todo;
//     }
//     delete(todoId:number){
//         var toDelete = this.getById(todoId);
//         var deletedIndex = this.todos.indexOf(toDelete);
//         this.todos.splice(deletedIndex,1)
//     }
//     getAll(): ITodo[] {
//         return this.todos;
//     }
//     getById(todoId: number): ITodo {
//         var filter = this.todos.filter(x=>x.id == todoId);
//         if (filter.length) {
//             return filter[0]
//         }
//         return null;
//     }
// }
