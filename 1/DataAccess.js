"use strict";
exports.__esModule = true;
exports.TodoService = void 0;
//--------------------------
var _lastId = 0;
function idGenerator() {
    return _lastId += 1;
}
var TodoService = /** @class */ (function () {
    function TodoService(todos) {
        this.todos = todos;
    }
    TodoService.prototype.add = function (todo) {
        todo.id = idGenerator();
        this.todos.push(todo);
        return todo;
    };
    TodoService.prototype["delete"] = function (todoId) {
        var toDelete = this.getById(todoId);
        var deletedIndex = this.todos.indexOf(toDelete);
        this.todos.splice(deletedIndex, 1);
    };
    TodoService.prototype.getAll = function () {
        return this.todos;
    };
    TodoService.prototype.getById = function (todoId) {
        var filter = this.todos.filter(function (x) { return x.id == todoId; });
        if (filter.length) {
            return filter[0];
        }
        return null;
    };
    return TodoService;
}());
exports.TodoService = TodoService;
