goog.provide('todo.todo_controller');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('todo.util');
goog.require('clojure.string');
goog.require('todo.util');
/**
* Create a TodoMVC module within Angular.js
*/
todo.todo_controller.todomvc = angular.module("todomvc",[]);
todo.todo_controller.todomvc.factory("todoStorage",(function (){
var storage_id = "todos-angular-cljs";
return {"get":(function (){
return JSON.parse((function (){var or__3943__auto__ = localStorage.getItem(storage_id);
if(cljs.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{return "[]";
}
})());
}),"set":(function (todos){
return localStorage.setItem(storage_id,JSON.stringify(todos));
})};
}));
todo.todo_controller.TodoCtrl = (function TodoCtrl($scope,$location,todoStorage){
$scope.$watch("todos",(function (todos){
todoStorage.set(todos);
return todo.util.assoc_BANG_.call(null,$scope,"\uFDD0'doneCount",cljs.core.count.call(null,todo.util.filter.call(null,"\uFDD0'completed",todos)),"\uFDD0'remainingCount",cljs.core.count.call(null,todo.util.remove.call(null,"\uFDD0'completed",todos)),"\uFDD0'allChecked",cljs.core.every_QMARK_.call(null,"\uFDD0'completed",todos));
}),true);
$scope.$watch("location.path()",(function (path){
return todo.util.assoc_BANG_.call(null,$scope,"\uFDD0'statusFilter",(function (){var G__2882 = path;
if(cljs.core._EQ_.call(null,"/completed",G__2882))
{return (function (p1__2879_SHARP_){
return (new cljs.core.Keyword("\uFDD0'completed")).call(null,p1__2879_SHARP_);
});
} else
{if(cljs.core._EQ_.call(null,"/active",G__2882))
{return (function (p1__2878_SHARP_){
return cljs.core.not.call(null,(new cljs.core.Keyword("\uFDD0'completed")).call(null,p1__2878_SHARP_));
});
} else
{if("\uFDD0'else")
{return null;
} else
{return null;
}
}
}
})());
}),true);
if(cljs.core.truth_(clojure.string.blank_QMARK_.call(null,$location.path())))
{$location.path("/");
} else
{}
return todo.util.assoc_BANG_.call(null,$scope,"\uFDD0'todos",todoStorage.get(),"\uFDD0'location",$location,"\uFDD0'addTodo",(function (){
if(cljs.core.truth_(clojure.string.blank_QMARK_.call(null,(new cljs.core.Keyword("\uFDD0'newTodo")).call(null,$scope))))
{return null;
} else
{cljs.core.conj_BANG_.call(null,(new cljs.core.Keyword("\uFDD0'todos")).call(null,$scope),{"title":(new cljs.core.Keyword("\uFDD0'newTodo")).call(null,$scope),"completed":false});
return todo.util.assoc_BANG_.call(null,$scope,"\uFDD0'newTodo","");
}
}),"\uFDD0'editTodo",(function (todo__$1){
return todo.util.assoc_BANG_.call(null,$scope,"\uFDD0'editedTodo",todo__$1);
}),"\uFDD0'removeTodo",(function (todo__$1){
return todo.util.update_in_BANG_.call(null,$scope,cljs.core.PersistentVector.fromArray(["\uFDD0'todos"], true),(function (todos){
return todo.util.remove.call(null,cljs.core.PersistentHashSet.fromArray([todo__$1]),todos);
}));
}),"\uFDD0'doneEditing",(function (todo__$1){
todo.util.assoc_BANG_.call(null,$scope,"\uFDD0'editedTodo",null);
if(cljs.core.truth_(clojure.string.blank_QMARK_.call(null,(new cljs.core.Keyword("\uFDD0'title")).call(null,todo__$1))))
{return $scope.removeTodo(todo__$1);
} else
{return null;
}
}),"\uFDD0'clearDoneTodos",(function (){
return todo.util.update_in_BANG_.call(null,$scope,cljs.core.PersistentVector.fromArray(["\uFDD0'todos"], true),(function (todos){
return todo.util.remove.call(null,"\uFDD0'completed",todos);
}));
}),"\uFDD0'markAll",(function (done){
var G__2883 = cljs.core.seq.call(null,(new cljs.core.Keyword("\uFDD0'todos")).call(null,$scope));
while(true){
if(G__2883)
{var todo__$1 = cljs.core.first.call(null,G__2883);
todo.util.assoc_BANG_.call(null,todo__$1,"\uFDD0'completed",done);
{
var G__2884 = cljs.core.next.call(null,G__2883);
G__2883 = G__2884;
continue;
}
} else
{return null;
}
break;
}
}));
});
todo.todo_controller.todomvc.controller("TodoCtrl",todo.todo_controller.TodoCtrl);
todo.todo_controller.todomvc.directive("todoBlur",(function (){
return (function (scope,el,attrs){
return el.bind("blur",(function (){
return scope.$apply(attrs.todoBlur);
}));
});
}));
todo.todo_controller.todomvc.directive("todoFocus",(function ($timeout){
return (function (scope,el,attrs){
return scope.$watch(attrs.todoFocus,(function (new_val){
if(cljs.core.truth_(new_val))
{return $timeout.call(null,(function (){
return (el[0]).focus();
}),0,false);
} else
{return null;
}
}));
});
}));
