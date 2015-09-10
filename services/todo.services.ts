/**
 * Created by sumantturlapati on 9/9/15.
 */
///<reference path='../typings/angularjs/angular.d.ts'/>
module todo.services {
    export interface ITodoService {
        getItems(): Array<string>;
        addItem(todo:string): void;
    }
    class TodoService implements ITodoService{
        items: Array<string>;
        constructor() {
            this.items = [];
        }
        addItem(todo: string) {
            this.items.push(todo);
        }

        getItems(): Array<string> {
            return this.items;
        }
    }
    angular.module("todo.services", []).service("TodoService", TodoService);
}