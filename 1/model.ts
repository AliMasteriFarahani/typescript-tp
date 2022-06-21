// namespace TodoApp.Model {
    
//     export interface ITodo {
//         id: number;
//         name: string;
//         state: TodoState;
//     }
// }

// namespace TodoApp.Model {
//     export enum TodoState {
//         New = 1,
//         Active,
//         Deleted,
//         Complete,
//     }
// }
// namespace DataAccess {
//     import Model = TodoApp.Model;
//     import ITodo = Model.ITodo; 
//     //import Todo2 = TodoApp.Model.ITodo;
//     interface ITodoService {
//         add(todo: ITodo): ITodo;
//         //add(todo: TodoApp.Model.ITodo): TodoApp.Model.ITodo;
//         delete(todoId: number): void;
//         getAll(): ITodo[];
//         getById(todoId: number): ITodo;
//     }
// }

// namespace farahani {
//     interface ITodo {
//         id: number;
//         name: string;
//         state: TodoState;
//     }
//     enum TodoState {
//         New = 1,
//         Active,
//         Deleted,
//         Complete,
//     }
// }


/// ========================================  
    export interface ITodo {
        id: number;
        name: string;
        state: TodoState;
    }
    export enum TodoState {
        New = 1,
        Active,
        Deleted,
        Complete,
    }

