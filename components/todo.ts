///<reference path="../services/todo.services.ts"/>
///<reference path='../typings/angularjs/angular.d.ts'/>
/**
 * Created by sumantturlapati on 9/9/15.
 */

module todo.controllers {
    class TodoController{

        static $inject = ['TodoService'];

        constructor(private todoService: todo.services.ITodoService){
        }
        addItem(todo:string) {
            this.todoService.addItem(todo);
        }
        items(): Array<string> {
            return this.todoService.getItems();
        }
    }

    angular.module("todo.controllers", []).controller("TodoController", TodoController);
}