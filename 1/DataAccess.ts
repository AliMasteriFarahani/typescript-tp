    import Model = require("./model");
    import ITodo = Model.ITodo;
    //--------------------------
    let _lastId: number = 0; 
    function idGenerator(){
        return _lastId+=1;
    }
    export interface ITodoService {
        add(todo: ITodo): ITodo;
        //add(todo: TodoApp.Model.ITodo): TodoApp.Model.ITodo;
        delete(todoId: number): void;
        getAll(): ITodo[];
        getById(todoId: number): ITodo;
    }
    interface IIdGenerator{
        nextId:number
    }
    export class TodoService implements ITodoService {
        constructor(private todos:ITodo[]){}
        add(todo:ITodo){
            todo.id = idGenerator();
            this.todos.push(todo);
            return todo;
        }
        delete(todoId:number){
            var toDelete = this.getById(todoId);
            var deletedIndex = this.todos.indexOf(toDelete);
            this.todos.splice(deletedIndex,1)
        }
        getAll(): ITodo[] {
            return this.todos;
        }
        getById(todoId: number): ITodo {
            var filter = this.todos.filter(x=>x.id == todoId);
            if (filter.length) {
                return filter[0]
            }
            return null;
        }
    }
