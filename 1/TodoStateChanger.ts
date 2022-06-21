abstract class TodoStateChanger {
   // way 2 :
    constructor(protected newState: TodoState) {}
    abstract canChangeState(todo: ITodo): boolean;
    changeState(todo: ITodo): ITodo {
        if (this.canChangeState(todo)) {
            todo.state = this.newState;
        }
        return todo;
    }
}
class CompleteTodoStateChanger extends TodoStateChanger {
    constructor() {
        super(TodoState.Complete);
        this.newState;
    }
    canChangeState(todo: ITodo): boolean {
        return !!todo && (todo.state == TodoState.Active || todo.state == TodoState.Deleted);
    }
}

let st = new CompleteTodoStateChanger();
